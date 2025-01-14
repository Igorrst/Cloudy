import { useState } from 'react';
import {
  RegisterContainer,
  HeaderContainer,
  LogoImage,
  FormContainer,
  InputField,
  RegisterButton,
  ErrorMessage,
} from './styles';
import ConfigIcon from '../../components/ConfigIcon';
import CloudyLogo from '../../assets/logo.png';
import { createUser } from '../../services/userService';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      password: !formData.password.trim(),
      confirmPassword: !formData.confirmPassword.trim(),
    };

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = true;
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) return;

    createUser(formData)

    console.log('Formulário enviado com sucesso:', formData);
  };

  return (
    <RegisterContainer>
      <HeaderContainer>
        <LogoImage src={CloudyLogo} alt="Logo Cloudy" />
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="Nome do perfil"
          value={formData.name}
          onChange={handleChange}
          hasError={errors.name}
        />
        {errors.name && <ErrorMessage>O nome é obrigatório.</ErrorMessage>}

        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          hasError={errors.email}
        />
        {errors.email && <ErrorMessage>O email é obrigatório.</ErrorMessage>}

        <InputField
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          hasError={errors.password}
        />
        {errors.password && <ErrorMessage>A senha é obrigatória.</ErrorMessage>}

        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Confirmar senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          hasError={errors.confirmPassword}
        />
        {errors.confirmPassword && (
          <ErrorMessage>A confirmação da senha é obrigatória.</ErrorMessage>
        )}

        <RegisterButton type="submit">Registrar</RegisterButton>
      </FormContainer>
      <ConfigIcon />
    </RegisterContainer>
  );
};

export default Register;