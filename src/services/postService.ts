import api from './api';

interface CreatePostData {
  content: string;
}

interface UpdatePostData {
  content: string;
}

export const createPost = async (postData: CreatePostData) => {
  const response = await api.post('/posts', postData);
  return response.data;
};

export const getPosts = async (text?: string, page: number = 1) => {
  const params = new URLSearchParams();
  if (text) params.append('text', text);
  params.append('page', page.toString());
  const response = await api.get(`/posts?${params.toString()}`);
  return response.data;
};

export const getPostById = async (postId: string) => {
  const response = await api.get(`/posts/${postId}`);
  return response.data;
};

export const updatePost = async (postId: string, postData: UpdatePostData) => {
  const response = await api.put(`/posts/${postId}`, postData);
  return response.data;
};

export const deletePost = async (postId: string) => {
  const response = await api.delete(`/posts/${postId}`);
  return response.data;
};

export const likePost = async (postId: string) => {
  const response = await api.post(`/posts/${postId}/likes`);
  return response.data;
};

export const unlikePost = async (postId: string) => {
  const response = await api.delete(`/posts/${postId}/likes`);
  return response.data;
};

