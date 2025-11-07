import useModalStore from "../../stores/modalStore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ConfigTrigger,
  ModalContainer,
  OptionRow,
  Separator,
  ReportSection,
  Textarea,
  ReportButton,
  LogoutButton,
  UserInfo,
  ArrowIcon,
  VerticalSeparator,
  ClickableRow,
} from "./styles";
import SwitchButton from "../SwitchButton";
import { LogOut, Moon, ChevronDown } from "lucide-react";
import Avatar from "../Avatar";
import useThemeStore from "../../stores/themeStore";

const Configurations: React.FC = () => {
  const { isModalOpen, toggleModal } = useModalStore();
  const navigate = useNavigate();
  const [reportText, setReportText] = useState("");

  const isNight = useThemeStore((state) => state.isNight);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const handleReportChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReportText(event.target.value);
  };

  const goToProfile = () => {
    toggleModal();
    navigate("/profile");
  };

  return (
    <>
      <ConfigTrigger onClick={toggleModal}>
        <UserInfo>
          <Avatar isNavigation={false} name="Igor" size={25} />
        </UserInfo>
        <VerticalSeparator />
        <ArrowIcon isOpen={isModalOpen}>
          <ChevronDown size={16} />
        </ArrowIcon>
      </ConfigTrigger>

      {isModalOpen && (
        <ModalContainer>
          <ClickableRow onClick={goToProfile}>
            <Avatar name="Igor" size={30} />
            <span>Perfil</span>
          </ClickableRow>

          <Separator />

          <OptionRow>
            <Moon size={25} />
            <SwitchButton isChecked={isNight} onToggle={toggleTheme} />
          </OptionRow>

          <Separator />

          <ReportSection>
            <h4>Reportar Bug</h4>
            <Textarea
              value={reportText}
              onChange={handleReportChange}
              placeholder="Descreva o problema que encontrou..."
            />
            <ReportButton>Enviar Reporte</ReportButton>
          </ReportSection>

          <Separator />

          <LogoutButton>
            <LogOut size={20} />
            <span>Sair</span>
          </LogoutButton>
        </ModalContainer>
      )}
    </>
  );
};

export default Configurations;