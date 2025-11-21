import { useNavigate } from "react-router-dom";
import { AvatarWrapper, Initials, AvatarImage } from "./styles";

interface AvatarProps {
  name: string;
  size?: number;
  isNavigation?: boolean;
  userId?: string;
  profilePhoto?: string;
}

const Avatar = ({
  isNavigation = true,
  name,
  size = 40,
  userId,
  profilePhoto,
}: AvatarProps) => {
  const navigate = useNavigate();
  const initial = name.charAt(0).toUpperCase();

  function handleclick() {
    if (isNavigation) {
      if (userId) {
        navigate(`/profile/${userId}`);
      } else {
        navigate("/profile");
      }
      return;
    }
  }

  return (
    <AvatarWrapper size={size} onClick={handleclick}>
      {profilePhoto ? (
        <AvatarImage src={profilePhoto} alt={name} size={size} />
      ) : (
        <Initials>{initial}</Initials>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
