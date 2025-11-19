import { Button } from "./styles";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useTheme } from "styled-components";

interface LikeButtonProps {
  liked: boolean;
  likesCount: number;
  onClick: () => void;
  onCountClick?: () => void;
}

const LikeButton = ({ liked, likesCount, onClick, onCountClick }: LikeButtonProps) => {
  const theme = useTheme();

  return (
    <Button onClick={onClick} liked={liked}>
      <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
        <Heart
          size={25}
          color={liked ? "red" : theme.colors.gray[1000]}
          fill={liked ? "red" : "none"}
        />
      </motion.div>
      {likesCount > 0 && (
        <span
          role="button"
          tabIndex={0}
          onClick={(event) => {
            event.stopPropagation();
            onCountClick?.();
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              event.stopPropagation();
              onCountClick?.();
            }
          }}
        >
          {likesCount}
        </span>
      )}
    </Button>
  );
};

export default LikeButton;
