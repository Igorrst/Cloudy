import { useState } from "react";
import { MessageSquare, X, MoreVertical, Edit, Trash2, Heart } from "lucide-react";
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
  CommentActions,
  CommentOptionsButton,
  CommentOptionsModal,
  CommentOptionItem,
  CommentLikeButton,
} from "./styles";
import Avatar from "../Avatar";
import { getUserIdFromToken } from "../../utils/auth";

interface CommentLike {
  id: string;
  name: string;
}

interface Comment {
  id: string;
  content: string;
  owner: {
    name: string;
    id: string;
    profilePhoto?: string;
  };
  createdAt: string;
  likes?: CommentLike[];
}

interface CommentButtonProps {
  postId: string;
  comments?: Comment[];
  commentsCount: number;
  onCommentCreate?: (postId: string, content: string) => void;
  onCommentEdit?: (postId: string, commentId: string, content: string) => void;
  onCommentDelete?: (postId: string, commentId: string) => void;
  onCommentLike?: (postId: string, commentId: string, isLiked: boolean) => void;
}

const CommentButton = ({ 
  postId, 
  comments = [], 
  commentsCount, 
  onCommentCreate,
  onCommentEdit,
  onCommentDelete,
  onCommentLike
}: CommentButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [showOptionsFor, setShowOptionsFor] = useState<string | null>(null);
  const currentUserId = getUserIdFromToken();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setNewComment("");
  };

  const handleSendComment = () => {
    if (newComment.trim() && onCommentCreate) {
      onCommentCreate(postId, newComment.trim());
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

  const isCommentOwner = (comment: Comment) => {
    return currentUserId === comment.owner.id;
  };

  const isCommentLiked = (comment: Comment) => {
    if (!currentUserId || !comment.likes) return false;
    return comment.likes.some((like) => like.id === currentUserId);
  };

  const handleEditComment = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setEditContent(comment.content);
    setShowOptionsFor(null);
  };

  const handleSaveEdit = () => {
    if (editingCommentId && editContent.trim() && onCommentEdit) {
      onCommentEdit(postId, editingCommentId, editContent.trim());
      setEditingCommentId(null);
      setEditContent("");
    }
  };

  const handleDeleteComment = (commentId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este comentário?") && onCommentDelete) {
      onCommentDelete(postId, commentId);
      setShowOptionsFor(null);
    }
  };

  const handleLikeComment = (comment: Comment) => {
    if (onCommentLike) {
      const isLiked = isCommentLiked(comment);
      onCommentLike(postId, comment.id, isLiked);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} hasComments={commentsCount > 0}>
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
          <MessageSquare 
            size={28} 
            strokeWidth={2}
            color={commentsCount > 0 ? "#FFD700" : undefined}
            fill={commentsCount > 0 ? "#FFD700" : "none"}
          />
        </motion.div>
        {commentsCount > 0 && <span>{commentsCount}</span>}
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
                          <Avatar
                            name={comment.owner.name}
                            size={32}
                            userId={comment.owner.id}
                            profilePhoto={comment.owner.profilePhoto}
                          />
                          <div style={{ flex: 1 }}>
                            <strong>{comment.owner.name}</strong>
                            <CommentTime>{formatDate(comment.createdAt)}</CommentTime>
                          </div>
                          <CommentActions>
                            <CommentLikeButton 
                              onClick={() => handleLikeComment(comment)}
                              liked={isCommentLiked(comment)}
                            >
                              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                                <Heart
                                  size={18}
                                  color={isCommentLiked(comment) ? "red" : undefined}
                                  fill={isCommentLiked(comment) ? "red" : "none"}
                                />
                              </motion.div>
                              {comment.likes && comment.likes.length > 0 && (
                                <span>{comment.likes.length}</span>
                              )}
                            </CommentLikeButton>
                          </CommentActions>
                          {isCommentOwner(comment) && (
                            <CommentOptionsButton onClick={() => setShowOptionsFor(showOptionsFor === comment.id ? null : comment.id)}>
                              <MoreVertical size={16} />
                            </CommentOptionsButton>
                          )}
                          {showOptionsFor === comment.id && (
                            <CommentOptionsModal>
                              <CommentOptionItem onClick={() => handleEditComment(comment)}>
                                <Edit size={14} />
                                <span>Editar</span>
                              </CommentOptionItem>
                              <CommentOptionItem onClick={() => handleDeleteComment(comment.id)} delete>
                                <Trash2 size={14} />
                                <span>Excluir</span>
                              </CommentOptionItem>
                            </CommentOptionsModal>
                          )}
                        </CommentHeader>
                        {editingCommentId === comment.id ? (
                          <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <CommentInput
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value)}
                              maxLength={280}
                              style={{ minHeight: '60px' }}
                            />
                            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                              <button
                                onClick={() => {
                                  setEditingCommentId(null);
                                  setEditContent("");
                                }}
                                style={{
                                  padding: '6px 12px',
                                  border: 'none',
                                  borderRadius: '6px',
                                  cursor: 'pointer',
                                  background: '#ccc'
                                }}
                              >
                                Cancelar
                              </button>
                              <button
                                onClick={handleSaveEdit}
                                style={{
                                  padding: '6px 12px',
                                  border: 'none',
                                  borderRadius: '6px',
                                  cursor: 'pointer',
                                  background: '#00b2ff',
                                  color: 'white'
                                }}
                              >
                                Salvar
                              </button>
                            </div>
                          </div>
                        ) : (
                          <CommentContent>{comment.content}</CommentContent>
                        )}
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
