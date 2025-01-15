import useModalStore from '../../stores/modalStore';
import { useState } from 'react';
import { ConfigIconContainer, ModalContainer, ThemeContainer, ThemeIcon, ReportSection, Textarea, ReportButton } from './styles';
import SwitchButton from '../SwitchButton';
import configIcon from '../../assets/config.png';
import themeIcon from '../../assets/theme.png';

const Configurations: React.FC = () => {
    const { isModalOpen, toggleModal } = useModalStore();
    const [isChecked, setIsChecked] = useState(false);
    const [reportText, setReportText] = useState('');

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleReportChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReportText(event.target.value);
    };

    return (
        <>
            <ConfigIconContainer src={configIcon} alt="Configuração" onClick={toggleModal} />
            {isModalOpen && (
                <ModalContainer>
                    <h3>Configurações</h3>
                    <ThemeContainer>
                        <ThemeIcon src={themeIcon} alt="Tema" />
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