import useModalStore from "../../stores/modalStore";
import { useState } from "react";
import {
  ConfigIconContainer,
  ModalContainer,
  ThemeContainer,
  ReportSection,
  Textarea,
  ReportButton,
} from "./styles";
import SwitchButton from "../SwitchButton";
import { Bolt, SunMoon } from "lucide-react";
import { useTheme } from "styled-components";

const Configurations: React.FC = () => {
  const { isModalOpen, toggleModal } = useModalStore();
  const [isChecked, setIsChecked] = useState(false);
  const [reportText, setReportText] = useState("");

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleReportChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReportText(event.target.value);
  };

  const theme = useTheme();

  return (
    <>
      <ConfigIconContainer onClick={toggleModal}>
        <Bolt size={30} color={theme.colors.gray[1000]} />
      </ConfigIconContainer>
      {isModalOpen && (
        <ModalContainer>
          <h3>Configurações</h3>
          <ThemeContainer>
            <SunMoon size={30} color={theme.colors.gray[1000]} />
            <SwitchButton isChecked={isChecked} onToggle={handleToggle} />
          </ThemeContainer>
          <ReportSection>
            <h4>Reportar Bug</h4>
            <Textarea
              value={reportText}
              onChange={handleReportChange}
              placeholder="Descreva o problema que encontrou..."
            />
            <ReportButton>Enviar Reporte</ReportButton>
          </ReportSection>
        </ModalContainer>
      )}
    </>
  );
};

export default Configurations;
