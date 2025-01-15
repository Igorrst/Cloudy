import { useState } from 'react';
import Configurations from '../../components/Configurations';
import {
  LogoImage,
  LoginContainer,
  FormContainer,
  InputField,
  LoginButton,
} from './styles';
import CloudyLogo from '../../assets/logo.png';
import { loginUser } from '../../services/userService';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);

      console.log('Dados retornados pela API:', response);

      const token = response;

      if (token && token.trim() !== '') {
        localStorage.setItem('authToken', token);
        alert('Login realizado com sucesso!');
      } else {
        console.error('Token não encontrado');
      }
    } catch (error: any) {
      console.error('Erro ao fazer login:', error);
      alert(
        error.response?.data?.message ||
        'Erro ao fazer login. Verifique suas credenciais.'
      );
    }
  };

  return (
    <>
      <Configurations />
      <LoginContainer>
        <LogoImage src={CloudyLogo} alt="Logo Cloudy" />
        <FormContainer onSubmit={handleLogin}>
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Senha"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <LoginButton type="submit">Entrar</LoginButton>
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default Login;