import { useState } from 'react';
import {
  LoginContainer,
  HeaderContainer,
  FormContainer,
  InputWrapper,
  InputField,
  ErrorMessage,
  ButtonWrapper,
} from './styles';
import Configurations from '../../components/Configurations';
import EmailIcon from '../../assets/email.png';
import PasswordIcon from '../../assets/password.png';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { loginUser } from '../../services/userService';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      email: !formData.email.trim(),
      password: !formData.password.trim(),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) return;

    try {
      const response = await loginUser(formData);

      const token = response;

      if (token && token.trim() !== '') {
        localStorage.setItem('authToken', token);
        alert('Login realizado com sucesso!');
      } else {
        console.error('Token não encontrado');
      }
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
        'Erro ao fazer login. Verifique suas credenciais.'
      );
    }
  };

  return (
    <LoginContainer>
      <HeaderContainer />
      <FormContainer onSubmit={handleLogin}>
        <h2>Login</h2>
        <InputWrapper>
          <img src={EmailIcon} alt="Ícone de email" />
          <InputField
            style={{ padding: '23px 0 23px 45px' }}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            hasError={errors.email}
          />
        </InputWrapper>
        {errors.email && <ErrorMessage>O email é obrigatório.</ErrorMessage>}

        <InputWrapper>
          <img src={PasswordIcon} alt="Ícone de senha" />
          <InputField
            style={{ padding: '23px 0 23px 45px' }}
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            hasError={errors.password}
          />
        </InputWrapper>
        {errors.password && <ErrorMessage>A senha é obrigatória.</ErrorMessage>}

        <ButtonWrapper>
          <PrimaryButton text="Entrar" type="submit" />
        </ButtonWrapper>
        <p style={{ marginLeft: '100px' }}>
          Ou{' '}
          <Link to="/register" style={{ textDecoration: 'none', color: 'blue' }}>
            registre-se
          </Link>
        </p>
      </FormContainer>
      <Configurations />
    </LoginContainer>
  );
};

export default Login;