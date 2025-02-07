import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  TextPost,
  BoxPost,
  Post,
  IconButton,
  HeartButton,
  CommentButton,
} from "./styles";

const Home = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [newPost, setNewPost] = useState("");
  const [likedPosts, setLikedPosts] = useState<boolean[]>([]);

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([newPost, ...posts]);
      setLikedPosts([false, ...likedPosts]);
      setNewPost("");
    }
  };

  const handleScroll = (event: React.WheelEvent) => {
    if (event.deltaY > 0) {
      if (currentPostIndex < posts.length - 1) {
        setCurrentPostIndex(currentPostIndex + 1);
      }
    } else {
      if (currentPostIndex > 0) {
        setCurrentPostIndex(currentPostIndex - 1);
      }
    }
  };

  const toggleLike = (index: number) => {
    const updatedLikes = [...likedPosts];
    updatedLikes[index] = !updatedLikes[index];
    setLikedPosts(updatedLikes);
  };

  return (
    <Container>
      <TextPost>
        <textarea
          placeholder="O que está pensando?"
          maxLength={100}
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <IconButton onClick={handleAddPost}>
          <img src="/src/assets/down.png" alt="Postar" />
        </IconButton>
      </TextPost>
      <BoxPost onWheel={handleScroll}>
        {posts.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPostIndex}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5 }}
              >
                <Post>{posts[currentPostIndex]}</Post>
              </motion.div>
            </AnimatePresence>
            <HeartButton
              onClick={() => toggleLike(currentPostIndex)}
              liked={likedPosts[currentPostIndex]}
              >
              <motion.img
               src={
                likedPosts[currentPostIndex]
                ? "/src/assets/heart-red.png"
                 : "/src/assets/heart.png"
              }
               alt="Curtir"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
               />
              </HeartButton>
            <CommentButton>
              <img src="/src/assets/comment.png" alt="Comentar" />
            </CommentButton>
          </>
        ) : (
          <p>Nenhum Post ainda, crie seu primeiro!</p>
        )}
      </BoxPost>
    </Container>
  );
};

export default Home;