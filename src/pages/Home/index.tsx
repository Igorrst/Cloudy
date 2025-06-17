import { useState } from "react";
import {
  Container,
  TextPost,
  BoxPost,
  IconButton,
  UserTop,
  TextArea,
} from "./styles";

import PostCard from "../../components/PostCard";
import Avatar from "../../components/Avatar";
import { Send } from "lucide-react";

const Home = () => {
  const [posts, setPosts] = useState<{ content: string }[]>([]);
  const [newPost, setNewPost] = useState("");
  const [likedPosts, setLikedPosts] = useState<boolean[]>([]);

  const handleAddPost = () => {
    if (newPost.trim()) {
      const newPostObject = { content: newPost };
      setPosts([newPostObject, ...posts]);
      setLikedPosts([false, ...likedPosts]);
      setNewPost("");
    }
  };

  const toggleLike = (index: number) => {
    const updatedLikes = [...likedPosts];
    updatedLikes[index] = !updatedLikes[index];
    setLikedPosts(updatedLikes);
  };

  return (
    <Container>
      <UserTop>
        <Avatar name="Igor" />
      </UserTop>

      <TextPost>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar name="Igor" />
          <TextArea
            placeholder="O que está pensando?"
            maxLength={100}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </div>
        <IconButton onClick={handleAddPost}>
          <Send size={20} />
          <p>Postar</p>
        </IconButton>
      </TextPost>

      <BoxPost>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostCard
              key={index}
              content={post.content}
              userName="Nome do Usuário"
              liked={likedPosts[index]}
              onClick={() => toggleLike(index)}
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
