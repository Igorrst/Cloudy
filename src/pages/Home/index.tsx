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

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadUser();
    loadPosts();
  }, []);

  const loadUser = async () => {
    const user = await getCurrentUser();
    setCurrentUser(user);
  };

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const response = await getPosts();
      const formattedPosts = response.posts.map((post: any) => ({
        id: post.id,
        content: post.content,
        owner: post.owner || { name: "Usuário", id: post.ownerId },
        ownerId: post.ownerId,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        likes: post.likes || [],
        comments: (post.comments || []).map((comment: any) => ({
          ...comment,
          likes: comment.likes || [],
        })),
      }));
      setPosts(formattedPosts);
    } catch (error) {
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
      } catch (error: any) {
        alert(error.response?.data?.message || "Erro ao criar post");
      }
    }
  };

  const handleLike = async (postId: string, isLiked: boolean) => {
    try {
      if (isLiked) {
        await unlikePost(postId);
      } else {
        await likePost(postId);
      }
      await loadPosts();
    } catch (error: any) {
    }
  };

  const handleEditPost = async (postId: string, newContent: string) => {
    try {
      await updatePost(postId, { content: newContent });
      await loadPosts();
    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao editar post");
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao excluir post");
    }
  };

  const handleCommentCreate = async (postId: string, content: string) => {
    try {
      await createComment(postId, { content });
      await loadPosts();
    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao criar comentário");
    }
  };

  const handleCommentEdit = async (postId: string, commentId: string, content: string) => {
    try {
      await updateComment(postId, commentId, { content });
      await loadPosts();
    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao editar comentário");
    }
  };

  const handleCommentDelete = async (postId: string, commentId: string) => {
    try {
      await deleteComment(postId, commentId);
      await loadPosts();
    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao excluir comentário");
    }
  };

  const handleCommentLike = async (postId: string, commentId: string, isLiked: boolean) => {
    try {
      if (isLiked) {
        await unlikeComment(postId, commentId);
      } else {
        await likeComment(postId, commentId);
      }
      await loadPosts();
    } catch (error: any) {
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
