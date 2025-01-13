import { PrimaryButton } from './styles';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <PrimaryButton onClick={onClick}>{text}</PrimaryButton>;
}

export default ActionButton;