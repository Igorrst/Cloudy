import { motion } from "framer-motion";
import { Container, PostContent, UserPostInfo } from "./styles";
import User from "../User";
import LikeButton from "../LikeButton";

interface PostCardProps {
  content: string;
  userName: string;
  liked: boolean;
  onClick: () => void;
}

const PostCard = ({ content, userName, liked, onClick }: PostCardProps) => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5 }}
      >
        <PostContent>{content}</PostContent>
      </motion.div>

      <LikeButton liked={liked} onClick={onClick} />

      <UserPostInfo>
        <User />
        <h3>{userName}</h3>
      </UserPostInfo>
    </Container>
  );
};

export default PostCard;
