import { SignupContainer, ButtonContainer, ButtonLabel, ScreenCloudy } from './styles';
import LogoType from '../../components/Logo';
import ConfigIcon from '../../components/ConfigIcon';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const Signup = () => {
  return (
    <SignupContainer>
      <LogoType />
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