import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container, TextPost, BoxPost, IconButton, UserTop } from "./styles";

import User from "../../components/User";
import PostCard from "../../components/PostCard";
import DownIcon from "../../assets/down.svg";

const Home = () => {
  const [posts, setPosts] = useState<{ content: string }[]>([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
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

  const handleScroll = (event: React.WheelEvent) => {
    if (event.deltaY > 0 && currentPostIndex < posts.length - 1) {
      setCurrentPostIndex(currentPostIndex + 1);
    } else if (event.deltaY < 0 && currentPostIndex > 0) {
      setCurrentPostIndex(currentPostIndex - 1);
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
        <User />
      </UserTop>

      <TextPost>
        <textarea
          placeholder="O que está pensando?"
          maxLength={100}
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <IconButton onClick={handleAddPost}>
          <img src={DownIcon} alt="Postar" />
        </IconButton>
      </TextPost>

      <BoxPost onWheel={handleScroll}>
        {posts.length > 0 ? (
          <AnimatePresence mode="wait">
            <PostCard
              key={currentPostIndex}
              content={posts[currentPostIndex].content}
              userName="Nome do Usuário"
              liked={likedPosts[currentPostIndex]}
              onClick={() => toggleLike(currentPostIndex)}
            />
          </AnimatePresence>
        ) : (
          <p>Nenhum Post ainda, crie seu primeiro!</p>
        )}
      </BoxPost>
    </Container>
  );
};

export default Home;
