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