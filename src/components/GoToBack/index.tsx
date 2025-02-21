import { useNavigate } from "react-router-dom";
import back from "../../assets/back.svg";
import { UserIcon } from "./styles";

const Back = () => {
  const navigate = useNavigate();

  return (
    <UserIcon
      src={back}
      alt="Usuário"
      onClick={() => navigate("/home")}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Back;