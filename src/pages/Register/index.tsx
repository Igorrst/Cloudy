import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RegisterContainer,
  HeaderContainer,
  FormContainer,
  InputWrapper,
  InputField,
  ErrorMessage,
  ButtonWrapper,
} from './styles';
import EmailIcon from '../../assets/email.png';
import PasswordIcon from '../../assets/password.png';
import UserIcon from '../../assets/user.png';
import { createUser } from '../../services/userService';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      password: !formData.password.trim() || formData.password.length < 8,
      confirmPassword: !formData.confirmPassword.trim(),
    };

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = true;
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) return;

    createUser(formData);
    alert('Conta criada com sucesso!');
    navigate('/home');
  };

  return (
    <RegisterContainer>
      <HeaderContainer>
      </HeaderContainer>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <h2>Registrar</h2>

        <InputWrapper>
          <img src={UserIcon} alt="Ícone de usuário" />
          <InputField
            style={{ padding: '23px 0 23px 45px' }}
            type="text"
            name="name"
            placeholder="Nome de usuário"
            value={formData.name}
            onChange={handleChange}
            hasError={errors.name}
          />
        </InputWrapper>
        {errors.name && <ErrorMessage>O nome é obrigatório.</ErrorMessage>}

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
            minLength={8}
          />
        </InputWrapper>
        {errors.password && <ErrorMessage>A senha é obrigatória.</ErrorMessage>}

        <InputWrapper>
          <img src={PasswordIcon} alt="Ícone de senha" />
          <InputField
            style={{ padding: '23px 0 23px 45px' }}
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            hasError={errors.confirmPassword}
            minLength={8}
          />
        </InputWrapper>
        {errors.password && (
          <ErrorMessage>
            {formData.password.length < 8
              ? 'A senha deve ter pelo menos 8 caracteres.'
              : 'A senha é obrigatória.'}
          </ErrorMessage>
        )}

        <ButtonWrapper>
          <PrimaryButton text="Registrar" onClick={handleSubmit} />
        </ButtonWrapper>
        <p style={{ marginLeft: '100px' }}>
          Ou <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>faça login</Link>
        </p>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;