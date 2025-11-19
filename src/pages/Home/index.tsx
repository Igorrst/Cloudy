import { useState, useEffect, useRef } from "react";
import {
  Container,
  TextPost,
  BoxPost,
  PublishButton,
  UserTop,
  TextArea,
  TextAreaContainer,
  EmojiButton,
  EmojiPickerContainer,
  PostsContainer,
} from "./styles";

import PostCard from "../../components/PostCard";
import Avatar from "../../components/Avatar";
import { UploadCloud, Smile } from "lucide-react";
import Configurations from "../../components/Configurations";
import EmojiPicker, { EmojiClickData, Theme, Categories } from "emoji-picker-react";
import { getPosts, createPost, updatePost, deletePost, likePost, unlikePost } from "../../services/postService";
import { createComment, updateComment, deleteComment, likeComment, unlikeComment } from "../../services/commentService";
import { getCurrentUser } from "../../services/userService";
import useThemeStore from "../../stores/themeStore";
import { Post, PostComment, CurrentUser, ApiPostsResponse, ApiPostResponse, ApiCommentResponse, isApiError } from "../../types";
import { validateContent } from "../../utils/contentFilter";

const POLLING_INTERVAL = 5000;

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const isNight = useThemeStore((state) => state.isNight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    loadUser();
    loadPosts();
  }, []);

  useEffect(() => {
    const syncPosts = async () => {
      try {
        const response = await getPosts() as ApiPostsResponse;
        const formattedPosts: Post[] = response.posts.map((post: ApiPostResponse) => ({
          id: post.id,
          content: post.content,
          owner: {
            name: post.owner?.name || "Usuário",
            id: post.ownerId
          },
          ownerId: post.ownerId,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          likes: post.likes || [],
          comments: (post.comments || []).map((comment: ApiCommentResponse): PostComment => ({
            id: comment.id,
            content: comment.content,
            owner: {
              name: comment.owner?.name || "Usuário",
              id: comment.ownerId
            },
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt,
            likes: comment.likes || [],
          })),
        }));

        setPosts(prevPosts => {
          const prevPostsMap = new Map(prevPosts.map(p => [p.id, p]));
          
          let hasChanges = false;
          const mergedPosts: Post[] = [];

          for (const newPost of formattedPosts) {
            const oldPost = prevPostsMap.get(newPost.id);
            
            if (!oldPost) {
              mergedPosts.push(newPost);
              hasChanges = true;
            } else {
              const needsUpdate = 
                oldPost.content !== newPost.content ||
                oldPost.updatedAt !== newPost.updatedAt ||
                oldPost.likes.length !== newPost.likes.length ||
                oldPost.comments.length !== newPost.comments.length ||
                newPost.comments.some((newComment: PostComment) => {
                  const oldComment = oldPost.comments.find(c => c.id === newComment.id);
                  if (!oldComment) return true;
                  return (
                    oldComment.content !== newComment.content ||
                    (oldComment.likes?.length || 0) !== (newComment.likes?.length || 0)
                  );
                });

              if (needsUpdate) {
                const mergedComments: PostComment[] = [];
                const oldCommentsMap = new Map(oldPost.comments.map(c => [c.id, c]));
                
                for (const newComment of newPost.comments) {
                  const oldComment = oldCommentsMap.get(newComment.id);
                  if (!oldComment) {
                    mergedComments.push(newComment);
                  } else {
                    if (
                      oldComment.content !== newComment.content ||
                      (oldComment.likes?.length || 0) !== (newComment.likes?.length || 0)
                    ) {
                      mergedComments.push(newComment);
                    } else {
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
                mergedPosts.push(oldPost);
              }
            }
          }

          return hasChanges ? mergedPosts : prevPosts;
        });
      } catch (error) {
      }
    };

    const intervalId = setInterval(syncPosts, POLLING_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  const loadUser = async () => {
    const user = await getCurrentUser();
    setCurrentUser(user);
  };

  const loadPosts = async (page: number = 1, append: boolean = false) => {
    try {
      if (append) {
        setIsLoadingMore(true);
      } else {
        setIsLoading(true);
      }
      
      const response = await getPosts(undefined, page) as ApiPostsResponse;
      const formattedPosts: Post[] = response.posts.map((post: ApiPostResponse) => ({
        id: post.id,
        content: post.content,
        owner: {
          name: post.owner?.name || "Usuário",
          id: post.ownerId
        },
        ownerId: post.ownerId,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        likes: post.likes || [],
        comments: (post.comments || []).map((comment: ApiCommentResponse): PostComment => ({
          id: comment.id,
          content: comment.content,
          owner: {
            name: comment.owner?.name || "Usuário",
            id: comment.ownerId
          },
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt,
          likes: comment.likes || [],
        })),
      }));
      
      if (append) {
        setPosts(prevPosts => [...prevPosts, ...formattedPosts]);
      } else {
        setPosts(formattedPosts);
      }
      
      if (response.meta) {
        const totalPages = Math.ceil((response.meta.total || 0) / 20);
        setHasMorePosts(page < totalPages);
      } else {
        setHasMorePosts(formattedPosts.length === 20);
      }
      
      setCurrentPage(page);
    } catch (error) {
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  const loadMorePosts = async () => {
    if (isLoadingMore || !hasMorePosts) return;
    await loadPosts(currentPage + 1, true);
  };

  const handleAddPost = async () => {
    if (newPost.trim()) {
      const validation = await validateContent(newPost.trim());
      if (!validation.isValid) {
        alert(validation.message);
        return;
      }

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
      
      setPosts(posts.map(post => {
        if (post.id === postId) {
          if (isLiked) {
            return {
              ...post,
              likes: post.likes.filter(like => like.id !== currentUser.id)
            };
          } else {
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
    const validation = await validateContent(newContent.trim());
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }

    try {
      const response = await updatePost(postId, { content: newContent.trim() });
      
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
    
    const validation = await validateContent(content.trim());
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }
    
    try {
      const response = await createComment(postId, { content: content.trim() });
      
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
    const validation = await validateContent(content.trim());
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }

    try {
      const response = await updateComment(postId, commentId, { content: content.trim() });
      
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
      
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map(comment => {
              if (comment.id === commentId) {
                if (isLiked) {
                  return {
                    ...comment,
                    likes: (comment.likes || []).filter(like => like.id !== currentUser.id)
                  };
                } else {
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

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    const cursorPosition = textarea.selectionStart;
    const textBefore = newPost.substring(0, cursorPosition);
    const textAfter = newPost.substring(cursorPosition);
    const newText = textBefore + emojiData.emoji + textAfter;

    setNewPost(newText);
    setShowEmojiPicker(false);

    setTimeout(() => {
      textarea.focus();
      const newCursorPosition = cursorPosition + emojiData.emoji.length;
      textarea.setSelectionRange(newCursorPosition, newCursorPosition);
    }, 0);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node) &&
        textAreaRef.current &&
        !textAreaRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button[aria-label="emoji"]')
      ) {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showEmojiPicker]);

  useEffect(() => {
    if (showEmojiPicker && emojiPickerRef.current) {
      const translateEmojiPicker = () => {
        const container = emojiPickerRef.current;
        if (!container) return;

        const inputs = container.querySelectorAll('input[placeholder="Search"], input[placeholder*="Search"]');
        inputs.forEach((input) => {
          if (input instanceof HTMLInputElement && input.placeholder === "Search") {
            input.placeholder = "Buscar";
          }
        });
      };

      const timeoutId = setTimeout(translateEmojiPicker, 300);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showEmojiPicker]);

  useEffect(() => {
    const handleScroll = () => {
      if (isLoadingMore || !hasMorePosts) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 200) {
        loadMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoadingMore, hasMorePosts]);

  return (
    <Container>
      <UserTop>
        <Configurations />
      </UserTop>

      <PostsContainer>
        <TextPost>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar name={currentUser?.name || "Usuário"} />
            <TextAreaContainer>
              <TextArea
                ref={textAreaRef}
                placeholder="O que está pensando?"
                maxLength={280}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                onClick={() => setShowEmojiPicker(false)}
              />
              <EmojiButton
                type="button"
                onClick={toggleEmojiPicker}
                aria-label="emoji"
              >
                <Smile size={20} />
              </EmojiButton>
            </TextAreaContainer>
          </div>
          <PublishButton onClick={handleAddPost}>
            <UploadCloud size={20} />
            <p>Postar</p>
          </PublishButton>
          {showEmojiPicker && (
            <EmojiPickerContainer ref={emojiPickerRef}>
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                theme={isNight ? Theme.DARK : Theme.LIGHT}
                width={windowWidth <= 480 ? windowWidth - 20 : 350}
                height={windowWidth <= 480 ? 350 : 400}
                searchDisabled={false}
                skinTonesDisabled={false}
                previewConfig={{ showPreview: false }}
                categories={[
                  { category: Categories.SUGGESTED, name: "Mais Usados" },
                  { category: Categories.SMILEYS_PEOPLE, name: "Carinhas e Pessoas" },
                  { category: Categories.ANIMALS_NATURE, name: "Animais e Natureza" },
                  { category: Categories.FOOD_DRINK, name: "Comida e Bebida" },
                  { category: Categories.TRAVEL_PLACES, name: "Viagem e Lugares" },
                  { category: Categories.ACTIVITIES, name: "Atividades" },
                  { category: Categories.OBJECTS, name: "Objetos" },
                  { category: Categories.SYMBOLS, name: "Símbolos" },
                  { category: Categories.FLAGS, name: "Bandeiras" }
                ]}
              />
            </EmojiPickerContainer>
          )}
        </TextPost>

        <BoxPost>
        {isLoading ? (
          <p>Carregando posts...</p>
        ) : posts.length > 0 ? (
          <>
            {posts.map((post) => (
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
            ))}
            {isLoadingMore && (
              <p style={{ textAlign: "center", padding: "20px" }}>Carregando mais posts...</p>
            )}
            {!hasMorePosts && posts.length > 0 && (
              <p style={{ textAlign: "center", padding: "20px", color: "#666" }}>Não há mais posts para carregar</p>
            )}
          </>
        ) : (
          <p>Nenhum Post ainda, crie seu primeiro!</p>
        )}
        </BoxPost>
      </PostsContainer>
    </Container>
  );
};

export default Home;
