import { useNavigate } from 'react-router-dom';
import { SignupContainer, CloudyBox, ButtonContainer, ButtonLabel, ScreenCloudy } from './styles';
import LogoType from '../../components/Logo';
import Configurations from '../../components/Configurations';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <SignupContainer>
      <LogoType />
      <CloudyBox>
        <ScreenCloudy>
          <ButtonContainer>
            <h2>Bem-vindo ao Cloudy</h2>
            <ButtonLabel>Inscreva-se</ButtonLabel>
            <PrimaryButton text="Criar conta" onClick={handleCreateAccount} />
            <ButtonLabel>Já tem uma conta?</ButtonLabel>
            <PrimaryButton text="Entrar" onClick={handleLogin} />
            <h3>
              @desenvolvido por{' '}
              <a href="https://github.com/Igorrst" target="_blank" rel="noopener noreferrer">
                Igorrst
              </a>{' '}
              &{' '}
              <a href="https://github.com/KaykyDion" target="_blank" rel="noopener noreferrer">
                KaykyDion
              </a>
            </h3>
          </ButtonContainer>
        </ScreenCloudy>
      </CloudyBox >
      <Configurations />
    </SignupContainer >
  );
};

export default Signup;