import { PrimaryButton } from "./styles";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ButtonProps> = ({ disabled, text, onClick }) => {
  return (
    <PrimaryButton disabled={disabled} onClick={onClick}>
      {text}
    </PrimaryButton>
  );
};

export default ActionButton;
