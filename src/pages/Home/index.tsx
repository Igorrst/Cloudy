import { useState, useEffect } from "react";
import {
  Container,
  TextPost,
  BoxPost,
  PublishButton,
  UserTop,
  TextArea,
} from "./styles";

import PostCard from "../../components/PostCard";
import Avatar from "../../components/Avatar";
import { UploadCloud } from "lucide-react";
import Configurations from "../../components/Configurations";
import { getPosts, createPost, updatePost, deletePost, likePost, unlikePost } from "../../services/postService";
import { createComment, updateComment, deleteComment, likeComment, unlikeComment } from "../../services/commentService";
import { getCurrentUser } from "../../services/userService";

interface PostOwner {
  name: string;
  id: string;
}

interface PostLike {
  id: string;
  name: string;
}

interface PostComment {
  id: string;
  content: string;
  owner: {
    name: string;
    id: string;
  };
  createdAt: string;
  updatedAt?: string;
  likes?: PostLike[];
}

interface Post {
  id: string;
  content: string;
  owner: PostOwner;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  likes: PostLike[];
  comments: PostComment[];
}

interface CurrentUser {
  id: string;
  name: string;
  email: string;
}

interface ApiPostResponse {
  id: string;
  content: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  owner?: PostOwner;
  likes?: PostLike[];
  comments?: ApiCommentResponse[];
}

interface ApiCommentResponse {
  id: string;
  content: string;
  ownerId: string;
  createdAt: string;
  updatedAt?: string;
  owner?: PostOwner;
  likes?: PostLike[];
}

interface ApiPostsResponse {
  posts: ApiPostResponse[];
  meta?: {
    page: number;
    total?: number;
  };
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error
  );
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadUser();
    loadPosts();
  }, []);

  // Polling para sincronizar atualizações entre usuários (sem recarregar a página)
  useEffect(() => {
    const POLLING_INTERVAL = 5000; // Verifica a cada 5 segundos

    const syncPosts = async () => {
      try {
        const response = await getPosts() as ApiPostsResponse;
        const formattedPosts: Post[] = response.posts.map((post: ApiPostResponse) => ({
          id: post.id,
          content: post.content,
          owner: post.owner || { name: "Usuário", id: post.ownerId },
          ownerId: post.ownerId,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          likes: post.likes || [],
          comments: (post.comments || []).map((comment: ApiCommentResponse): PostComment => ({
            id: comment.id,
            content: comment.content,
            owner: comment.owner || { name: "Usuário", id: comment.ownerId },
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt,
            likes: comment.likes || [],
          })),
        }));

        // Mesclagem inteligente: atualiza apenas o que mudou, preservando o resto
        setPosts(prevPosts => {
          // Cria um mapa dos posts atuais para acesso rápido
          const prevPostsMap = new Map(prevPosts.map(p => [p.id, p]));
          
          let hasChanges = false;
          const mergedPosts: Post[] = [];

          // Processa posts na ordem da API (mais recentes primeiro)
          for (const newPost of formattedPosts) {
            const oldPost = prevPostsMap.get(newPost.id);
            
            if (!oldPost) {
              // Novo post - adiciona
              mergedPosts.push(newPost);
              hasChanges = true;
            } else {
              // Post existente - verifica se precisa atualizar
              const needsUpdate = 
                oldPost.content !== newPost.content ||
                oldPost.updatedAt !== newPost.updatedAt ||
                oldPost.likes.length !== newPost.likes.length ||
                oldPost.comments.length !== newPost.comments.length ||
                // Verifica mudanças em comentários
                newPost.comments.some((newComment: PostComment) => {
                  const oldComment = oldPost.comments.find(c => c.id === newComment.id);
                  if (!oldComment) return true; // Novo comentário
                  return (
                    oldComment.content !== newComment.content ||
                    (oldComment.likes?.length || 0) !== (newComment.likes?.length || 0)
                  );
                });

              if (needsUpdate) {
                // Mescla comentários inteligentemente
                const mergedComments: PostComment[] = [];
                const oldCommentsMap = new Map(oldPost.comments.map(c => [c.id, c]));
                
                for (const newComment of newPost.comments) {
                  const oldComment = oldCommentsMap.get(newComment.id);
                  if (!oldComment) {
                    // Novo comentário
                    mergedComments.push(newComment);
                  } else {
                    // Comentário existente - verifica se precisa atualizar
                    if (
                      oldComment.content !== newComment.content ||
                      (oldComment.likes?.length || 0) !== (newComment.likes?.length || 0)
                    ) {
                      mergedComments.push(newComment);
                    } else {
                      // Mantém o comentário antigo (preserva estado local se houver)
                      mergedComments.push(oldComment);
                    }
                  }
                }

                mergedPosts.push({
                  ...newPost,
                  comments: mergedComments
                });
                hasChanges = true;
              } else {
                // Nenhuma mudança - mantém o post original (preserva estado local)
                mergedPosts.push(oldPost);
              }
            }
          }

          // Retorna posts mesclados apenas se houver mudanças reais
          return hasChanges ? mergedPosts : prevPosts;
        });
      } catch (error) {
        // Silenciosamente ignora erros no polling para não interromper a experiência
        console.error("Erro ao sincronizar posts:", error);
      }
    };

    const intervalId = setInterval(syncPosts, POLLING_INTERVAL);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // Executa apenas uma vez quando o componente monta

  const loadUser = async () => {
    const user = await getCurrentUser();
    setCurrentUser(user);
  };

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const response = await getPosts() as ApiPostsResponse;
      const formattedPosts: Post[] = response.posts.map((post: ApiPostResponse) => ({
        id: post.id,
        content: post.content,
        owner: post.owner || { name: "Usuário", id: post.ownerId },
        ownerId: post.ownerId,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        likes: post.likes || [],
        comments: (post.comments || []).map((comment: ApiCommentResponse): PostComment => ({
          id: comment.id,
          content: comment.content,
          owner: comment.owner || { name: "Usuário", id: comment.ownerId },
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt,
          likes: comment.likes || [],
        })),
      }));
      setPosts(formattedPosts);
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddPost = async () => {
    if (newPost.trim()) {
      try {
        const response = await createPost({ content: newPost.trim() });
        const newPostData: Post = {
          id: response.id,
          content: response.content,
          owner: currentUser || { name: "Você", id: "" },
          ownerId: currentUser?.id || "",
          createdAt: response.createdAt,
          updatedAt: response.updatedAt,
          likes: [],
          comments: [],
        };
        setPosts([newPostData, ...posts]);
        setNewPost("");
      } catch (error: unknown) {
        const errorMessage = isApiError(error) 
          ? error.response?.data?.message || "Erro ao criar post"
          : "Erro ao criar post";
        alert(errorMessage);
      }
    }
  };

  const handleLike = async (postId: string, isLiked: boolean) => {
    if (!currentUser) return;
    
    try {
      if (isLiked) {
        await unlikePost(postId);
      } else {
        await likePost(postId);
      }
      
      // Atualiza apenas o post específico no estado local
      setPosts(posts.map(post => {
        if (post.id === postId) {
          if (isLiked) {
            // Remove o like
            return {
              ...post,
              likes: post.likes.filter(like => like.id !== currentUser.id)
            };
          } else {
            // Adiciona o like
            return {
              ...post,
              likes: [...post.likes, { id: currentUser.id, name: currentUser.name }]
            };
          }
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao curtir post"
        : "Erro ao curtir post";
      alert(errorMessage);
    }
  };

  const handleEditPost = async (postId: string, newContent: string) => {
    try {
      const response = await updatePost(postId, { content: newContent });
      
      // Atualiza apenas o post específico no estado local
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            content: response.content,
            updatedAt: response.updatedAt
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao editar post"
        : "Erro ao editar post";
      alert(errorMessage);
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao excluir post"
        : "Erro ao excluir post";
      alert(errorMessage);
    }
  };

  const handleCommentCreate = async (postId: string, content: string) => {
    if (!currentUser) return;
    
    try {
      const response = await createComment(postId, { content });
      
      // Adiciona o novo comentário ao post específico no estado local
      const newComment: PostComment = {
        id: response.id,
        content: response.content,
        owner: {
          name: currentUser.name,
          id: currentUser.id
        },
        createdAt: response.createdAt,
        likes: []
      };
      
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao criar comentário"
        : "Erro ao criar comentário";
      alert(errorMessage);
    }
  };

  const handleCommentEdit = async (postId: string, commentId: string, content: string) => {
    try {
      const response = await updateComment(postId, commentId, { content });
      
      // Atualiza apenas o comentário específico no estado local
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map(comment => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  content: response.content,
                  updatedAt: response.updatedAt
                };
              }
              return comment;
            })
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao editar comentário"
        : "Erro ao editar comentário";
      alert(errorMessage);
    }
  };

  const handleCommentDelete = async (postId: string, commentId: string) => {
    try {
      await deleteComment(postId, commentId);
      
      // Remove apenas o comentário específico do estado local
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.filter(comment => comment.id !== commentId)
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao excluir comentário"
        : "Erro ao excluir comentário";
      alert(errorMessage);
    }
  };

  const handleCommentLike = async (postId: string, commentId: string, isLiked: boolean) => {
    if (!currentUser) return;
    
    try {
      if (isLiked) {
        await unlikeComment(postId, commentId);
      } else {
        await likeComment(postId, commentId);
      }
      
      // Atualiza apenas o like do comentário específico no estado local
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map(comment => {
              if (comment.id === commentId) {
                if (isLiked) {
                  // Remove o like
                  return {
                    ...comment,
                    likes: (comment.likes || []).filter(like => like.id !== currentUser.id)
                  };
                } else {
                  // Adiciona o like
                  return {
                    ...comment,
                    likes: [...(comment.likes || []), { id: currentUser.id, name: currentUser.name }]
                  };
                }
              }
              return comment;
            })
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao curtir comentário"
        : "Erro ao curtir comentário";
      alert(errorMessage);
    }
  };

  const isPostLiked = (post: Post): boolean => {
    if (!currentUser) return false;
    return post.likes.some((like) => like.id === currentUser.id);
  };

  return (
    <Container>
      <UserTop>
        <Configurations />
      </UserTop>

      <TextPost>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar name={currentUser?.name || "Usuário"} />
          <TextArea
            placeholder="O que está pensando?"
            maxLength={280}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </div>
        <PublishButton onClick={handleAddPost}>
          <UploadCloud size={20} />
          <p>Postar</p>
        </PublishButton>
      </TextPost>

      <BoxPost>
        {isLoading ? (
          <p>Carregando posts...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              content={post.content}
              owner={post.owner}
              ownerId={post.ownerId}
              liked={isPostLiked(post)}
              likesCount={post.likes.length}
              comments={post.comments}
              onLike={() => handleLike(post.id, isPostLiked(post))}
              onEdit={handleEditPost}
              onDelete={handleDeletePost}
              onCommentCreate={handleCommentCreate}
              onCommentEdit={handleCommentEdit}
              onCommentDelete={handleCommentDelete}
              onCommentLike={handleCommentLike}
            />
          ))
        ) : (
          <p>Nenhum Post ainda, crie seu primeiro!</p>
        )}
      </BoxPost>
    </Container>
  );
};

export default Home;
