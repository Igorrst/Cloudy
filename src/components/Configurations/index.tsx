import useModalStore from "../../stores/modalStore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  ConfirmModalOverlay,
  ConfirmModalContent,
  ConfirmModalTitle,
  ConfirmModalButtons,
  ConfirmButton,
  CancelButton,
} from "./styles";
import SwitchButton from "../SwitchButton";
import { LogOut, Moon, ChevronDown } from "lucide-react";
import Avatar from "../Avatar";
import useThemeStore from "../../stores/themeStore";

const Configurations: React.FC = () => {
  const { isModalOpen, toggleModal } = useModalStore();
  const navigate = useNavigate();
  const [reportText, setReportText] = useState("");
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);

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

  const handleLogoutClick = () => {
    setShowConfirmLogout(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("authToken");
    toggleModal();
    setShowConfirmLogout(false);
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowConfirmLogout(false);
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

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <LogoutButton onClick={handleLogoutClick}>
              <LogOut size={20} />
              <span>Sair</span>
            </LogoutButton>
          </motion.div>
        </ModalContainer>
      )}

      {showConfirmLogout && (
        <ConfirmModalOverlay onClick={handleCancelLogout}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ConfirmModalContent>
              <ConfirmModalTitle>Deseja realmente sair?</ConfirmModalTitle>
              <ConfirmModalButtons>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CancelButton onClick={handleCancelLogout}>
                    Cancelar
                  </CancelButton>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ConfirmButton onClick={handleConfirmLogout}>
                    Sair
                  </ConfirmButton>
                </motion.div>
              </ConfirmModalButtons>
            </ConfirmModalContent>
          </motion.div>
        </ConfirmModalOverlay>
      )}
    </>
  );
};

export default Configurations;