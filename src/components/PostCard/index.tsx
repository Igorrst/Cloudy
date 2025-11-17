import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import { Container, PostContent, UserPostInfo, PostActions, OptionsButton, OptionsModal, OptionItem } from "./styles";
import Avatar from "../Avatar";
import LikeButton from "../LikeButton";
import Comment from "../Comment";
import { getUserIdFromToken } from "../../utils/auth";

interface PostOwner {
  name: string;
  id: string;
}

interface PostComment {
  id: string;
  content: string;
  owner: {
    name: string;
    id: string;
  };
  createdAt: string;
}

interface PostCardProps {
  id: string;
  content: string;
  owner: PostOwner;
  ownerId: string;
  liked: boolean;
  likesCount: number;
  comments: PostComment[];
  onLike: () => void;
  onEdit: (postId: string, newContent: string) => void;
  onDelete: (postId: string) => void;
  onCommentCreate: (postId: string, content: string) => void;
  onCommentEdit?: (postId: string, commentId: string, content: string) => void;
  onCommentDelete?: (postId: string, commentId: string) => void;
  onCommentLike?: (postId: string, commentId: string, isLiked: boolean) => void;
}

const PostCard = ({ 
  id, 
  content, 
  owner, 
  ownerId, 
  liked, 
  likesCount,
  comments,
  onLike, 
  onEdit, 
  onDelete,
  onCommentCreate,
  onCommentEdit,
  onCommentDelete,
  onCommentLike
}: PostCardProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const currentUserId = getUserIdFromToken();
  const isOwner = currentUserId === ownerId;

  const handleEdit = () => {
    setShowOptions(false);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    if (editContent.trim() && editContent !== content) {
      onEdit(id, editContent);
    }
    setShowEditModal(false);
  };

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja excluir este post?")) {
      onDelete(id);
      setShowOptions(false);
    }
  };

  return (
    <Container>
      {isOwner && (
        <OptionsButton onClick={() => setShowOptions(!showOptions)}>
          <MoreVertical size={20} />
        </OptionsButton>
      )}

      <AnimatePresence>
        {showOptions && (
          <OptionsModal>
            <OptionItem onClick={handleEdit}>
              <Edit size={16} />
              <span>Editar</span>
            </OptionItem>
            <OptionItem onClick={handleDelete} delete>
              <Trash2 size={16} />
              <span>Excluir</span>
            </OptionItem>
          </OptionsModal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEditModal && (
          <OptionsModal>
            <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '80px',
                  padding: '8px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  resize: 'none',
                  fontFamily: 'inherit',
                  fontSize: '14px'
                }}
                maxLength={280}
              />
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setShowEditModal(false)}
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
          </OptionsModal>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5 }}
      >
        <PostContent>{content}</PostContent>
      </motion.div>

      <UserPostInfo>
        <Avatar name={owner.name} />
        <h3>{owner.name}</h3>
      </UserPostInfo>

      <PostActions>
        <div className="action-button like">
          <LikeButton liked={liked} likesCount={likesCount} onClick={onLike} />
        </div>
        <div className="action-button comment">
          <Comment 
            postId={id} 
            comments={comments} 
            commentsCount={comments.length} 
            onCommentCreate={onCommentCreate}
            onCommentEdit={onCommentEdit}
            onCommentDelete={onCommentDelete}
            onCommentLike={onCommentLike}
          />
        </div>
      </PostActions>
    </Container>
  );
};

export default PostCard;
