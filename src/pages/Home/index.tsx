import { useState } from "react";
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
import { CloudUpload } from "lucide-react";
import Configurations from "../../components/Configurations";

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
        <Configurations />
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
        <PublishButton onClick={handleAddPost}>
          <CloudUpload size={20} />
          <p>Postar</p>
        </PublishButton>
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
