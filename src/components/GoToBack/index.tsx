import { useNavigate } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";
import { useTheme } from "styled-components";

const Back = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <CircleArrowLeft
      onClick={() => navigate("/home")}
      size={30}
      color={theme.colors.gray[1000]}
    />
  );
};

export default Back;
