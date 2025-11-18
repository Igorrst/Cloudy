import api from './api';

interface RegisterUserData { name: string, email: string, password: string }
interface LoginUserData { email: string, password: string }

export const createUser = async (userData: RegisterUserData) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

export const loginUser = async (userData: LoginUserData) => {
  const response = await api.post('/users/login', userData);
  return response.data;
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) return null;
  
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    const decoded = JSON.parse(atob(parts[1]));
    if (decoded.id) {
      const response = await api.get(`/users/${decoded.id}`);
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (userId: string) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

interface UpdateUserData {
  bio?: string;
  profilePhoto?: string;
}

export const updateUser = async (userId: string, userData: UpdateUserData) => {
  const response = await api.put(`/users/${userId}`, userData);
  return response.data;
};

export interface SearchUsersResponse {
  users: Array<{
    id: string;
    name: string;
    email: string;
    bio?: string;
    profilePhoto?: string;
    createdAt: string;
    updatedAt: string;
  }>;
  meta: {
    page: number;
    total: number;
  };
}

export const searchUsers = async (name: string, page: number = 1): Promise<SearchUsersResponse> => {
  const params = new URLSearchParams();
  if (name) params.append('name', name);
  params.append('page', page.toString());
  const response = await api.get(`/users?${params.toString()}`);
  return response.data;
};

export const followUser = async (userId: string) => {
  const response = await api.post(`/users/${userId}/followers`);
  return response.data;
};

export const unfollowUser = async (userId: string) => {
  const response = await api.delete(`/users/${userId}/followers`);
  return response.data;
};