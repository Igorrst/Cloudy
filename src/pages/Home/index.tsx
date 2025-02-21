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
  UserTop,
  UserPost,
} from "./styles";
import User from "../../components/User";
import DownIcon from "../../assets/down.svg";
import CommentIcon from "../../assets/comment.svg";
import HeartIcon from "../../assets/heart.svg";
import HeartRedIcon from "../../assets/heart-red.svg";

const Home = () => {
  const [posts, setPosts] = useState<any[]>([]);
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
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPostIndex}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5 }}
              >
                <Post>{posts[currentPostIndex].content}</Post>
              </motion.div>
            </AnimatePresence>
            <HeartButton
              onClick={() => toggleLike(currentPostIndex)}
              liked={likedPosts[currentPostIndex]}
            >
              <motion.img
                src={likedPosts[currentPostIndex] ? HeartRedIcon : HeartIcon}
                alt="Like Icon"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </HeartButton>
            <CommentButton>
              <img src={CommentIcon} alt="Comentar" />
            </CommentButton>
          </>
        ) : (
          <p>Nenhum Post ainda, crie seu primeiro!</p>
        )}
        <UserPost>
          <User />
          <h3>Nome do Usuário</h3>
        </UserPost>
      </BoxPost>
    </Container>
  );
};

export default Home;