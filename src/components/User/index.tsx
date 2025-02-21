import { useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import { UserIcon } from "./styles";

const User = () => {
  const navigate = useNavigate();

  return (
    <UserIcon
      src={user}
      alt="Usuário"
      onClick={() => navigate("/profile")}
      style={{ cursor: "pointer" }}
    />
  );
};

export default User;