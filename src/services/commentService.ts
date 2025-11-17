import api from './api';

interface CreateCommentData {
  content: string;
}

export const createComment = async (postId: string, commentData: CreateCommentData) => {
  const response = await api.post(`/posts/${postId}/comments`, commentData);
  return response.data;
};

export const updateComment = async (postId: string, commentId: string, commentData: CreateCommentData) => {
  const response = await api.put(`/posts/${postId}/comments/${commentId}`, commentData);
  return response.data;
};

export const deleteComment = async (postId: string, commentId: string) => {
  const response = await api.delete(`/posts/${postId}/comments/${commentId}`);
  return response.data;
};

export const likeComment = async (postId: string, commentId: string) => {
  const response = await api.post(`/posts/${postId}/comments/${commentId}/likes`);
  return response.data;
};

export const unlikeComment = async (postId: string, commentId: string) => {
  const response = await api.delete(`/posts/${postId}/comments/${commentId}/likes`);
  return response.data;
};

