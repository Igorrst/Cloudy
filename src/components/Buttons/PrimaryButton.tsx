import { PrimaryButton } from './styles';

interface ButtonProps {
  text: string;
}

const ActionButton: React.FC<ButtonProps> = ({ text }) => {
  return <PrimaryButton>{text}</PrimaryButton>;
}

export default ActionButton;