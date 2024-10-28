import { SignupContainer, Logo, ButtonContainer, ButtonLabel, ScreenCloudy } from './styles';
import logo from '../../assets/logo.png';
import ConfigIcon from '../../components/ConfigIcon';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const Signup = () => {
  return (
    <SignupContainer>
      <Logo src={logo} alt="Logo" />
      <ScreenCloudy>
        { }
        <ButtonContainer>
          <ButtonLabel>Inscreva-se</ButtonLabel>
          <PrimaryButton text="Criar conta" />
        </ButtonContainer>

        { }
        <ButtonContainer>
          <ButtonLabel>Já tem uma conta?</ButtonLabel>
          <PrimaryButton text="Entrar" />
        </ButtonContainer>
      </ScreenCloudy>
      <ConfigIcon />
    </SignupContainer>
  );
};

export default Signup;