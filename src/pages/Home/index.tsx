import { useState } from "react";
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
          maxLength={300}
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
            <Post>{posts[currentPostIndex]}</Post>
            <HeartButton
              onClick={() => toggleLike(currentPostIndex)}
              liked={likedPosts[currentPostIndex]}
            >
              <img
                src={
                  likedPosts[currentPostIndex]
                    ? "/src/assets/heart-red.png"
                    : "/src/assets/heart.png"
                }
                alt="Curtir"
              />
            </HeartButton>
            <CommentButton>
              <img src="/src/assets/comment.png" alt="Comentar" />
            </CommentButton>
          </>
        ) : (
          <p>Nenhum post ainda. Crie seu primeiro!</p>
        )}
      </BoxPost>
    </Container>
  );
};

export default Home;