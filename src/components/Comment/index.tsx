import { MessageSquare } from "lucide-react";
import { Button } from "./styles";
import { motion } from "framer-motion";

interface CommentButtonProps {
  onClick?: () => void;
}

const CommentButton = ({ onClick }: CommentButtonProps) => {
  return (
    <Button onClick={onClick}>
      <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
        <MessageSquare size={28} strokeWidth={2} />
      </motion.div>
    </Button>
  );
};

export default CommentButton;
