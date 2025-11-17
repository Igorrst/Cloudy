import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  CommentsList,
  CommentItem,
  CommentHeader,
  CommentContent,
  CommentTime,
  CommentInputContainer,
  CommentInput,
  SendButton,
  EmptyComments,
} from "./styles";
import Avatar from "../Avatar";

interface Comment {
  id: string;
  content: string;
  owner: {
    name: string;
    id: string;
  };
  createdAt: string;
}

interface CommentButtonProps {
  comments?: Comment[];
}

const CommentButton = ({ comments = [] }: CommentButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setNewComment("");
  };

  const handleSendComment = () => {
    if (newComment.trim()) {
      setNewComment("");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "agora";
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}d`;
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
          <MessageSquare size={28} strokeWidth={2} />
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <ModalOverlay onClick={handleClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <ModalContent>
                <ModalHeader>
                  <h3>Comentários</h3>
                  <CloseButton onClick={handleClose}>
                    <X size={20} />
                  </CloseButton>
                </ModalHeader>

                <CommentsList>
                  {comments.length === 0 ? (
                    <EmptyComments>
                      <MessageSquare size={48} />
                      <p>Nenhum comentário ainda</p>
                      <span>Seja o primeiro a comentar!</span>
                    </EmptyComments>
                  ) : (
                    comments.map((comment) => (
                      <CommentItem key={comment.id}>
                        <CommentHeader>
                          <Avatar name={comment.owner.name} size={32} />
                          <div>
                            <strong>{comment.owner.name}</strong>
                            <CommentTime>{formatDate(comment.createdAt)}</CommentTime>
                          </div>
                        </CommentHeader>
                        <CommentContent>{comment.content}</CommentContent>
                      </CommentItem>
                    ))
                  )}
                </CommentsList>

                <CommentInputContainer>
                  <CommentInput
                    placeholder="Escreva um comentário..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    maxLength={280}
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SendButton
                      onClick={handleSendComment}
                      disabled={!newComment.trim()}
                    >
                      Enviar
                    </SendButton>
                  </motion.div>
                </CommentInputContainer>
              </ModalContent>
            </motion.div>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommentButton;
