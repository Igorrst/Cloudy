import { Button } from "./styles";
import HeartIcon from "../../assets/heart.svg";
import HeartRedIcon from "../../assets/heart-red.svg";
import { motion } from "framer-motion";

interface LikeButtonProps {
  liked: boolean;
  onClick: () => void;
}

const LikeButton = ({ liked, onClick }: LikeButtonProps) => {
  return (
    <Button onClick={onClick} liked={liked}>
      <motion.img
        src={liked ? HeartRedIcon : HeartIcon}
        alt="Like"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      />
    </Button>
  );
};

export default LikeButton;
