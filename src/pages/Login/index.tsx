import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  HeaderContainer,
  FormContainer,
  InputWrapper,
  InputField,
  ErrorMessage,
  ButtonWrapper,
  FormFeedback,
} from "./styles";
import { Mail, LockKeyhole } from "lucide-react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { loginUser } from "../../services/userService";
import { isApiError } from "../../types";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [isLoading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
    setGeneralError("");
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setGeneralError("");

    const newErrors = {
      email: !formData.email.trim(),
      password: !formData.password.trim(),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      setLoading(false);
      return;
    }

    try {
      const response = await loginUser(formData);

      const token = response;

      if (token && token.trim() !== "") {
        localStorage.setItem("authToken", token);
        setLoading(false);
        navigate("/home");
      }
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao fazer login. Verifique suas credenciais."
        : "Erro ao fazer login. Verifique suas credenciais.";
      setGeneralError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <HeaderContainer />
      <FormContainer onSubmit={handleLogin}>
        <h2>Login</h2>
        <InputWrapper>
          <Mail size={24} style={{ position: "absolute", left: "12px" }} />
          <InputField
            style={{ padding: "23px 0 23px 45px" }}
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
          <LockKeyhole
            size={24}
            style={{ position: "absolute", left: "12px" }}
          />
          <InputField
            style={{ padding: "23px 0 23px 45px" }}
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
          <PrimaryButton disabled={isLoading} text="Entrar" />
        </ButtonWrapper>
        {generalError && <FormFeedback>{generalError}</FormFeedback>}
        <p style={{ marginLeft: "100px" }}>
          Ou{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "blue" }}
          >
            registre-se
          </Link>
        </p>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
