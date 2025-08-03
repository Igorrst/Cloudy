import { Button } from "./styles";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useTheme } from "styled-components";

interface LikeButtonProps {
  liked: boolean;
  onClick: () => void;
}

const LikeButton = ({ liked, onClick }: LikeButtonProps) => {
  const theme = useTheme();

  return (
    <Button onClick={onClick} liked={liked}>
      <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
        <Heart
          size={30}
          color={liked ? "red" : theme.colors.gray[1000]}
          fill={liked ? "red" : "none"}
        />
      </motion.div>
    </Button>
  );
};

export default LikeButton;
