import { useNavigate } from "react-router-dom";
import { AvatarWrapper, Initials } from "./styles";

interface AvatarProps {
  name: string;
}

const Avatar = ({ name }: AvatarProps) => {
  const navigate = useNavigate();
  const initial = name.charAt(0).toUpperCase();

  return (
    <AvatarWrapper onClick={() => navigate("/profile")}>
      <Initials>{initial}</Initials>
    </AvatarWrapper>
  );
};

export default Avatar;
