import useModalStore from '../../stores/modalStore';
import { ConfigIconContainer, ModalContainer, ThemeSwitch } from './styles';
import configIcon from '../../assets/config.png';

const ConfigIcon: React.FC = () => {
  const { isModalOpen, toggleModal } = useModalStore();

  return (
    <>
      <ConfigIconContainer src={configIcon} alt="Configuração" onClick={toggleModal} />
      {isModalOpen && (
        <ModalContainer>
          <h3>Configurações</h3>
          <ThemeSwitch>
            <input type="checkbox" id="themeToggle" />
            <label htmlFor="themeToggle">Trocar Tema</label>
          </ThemeSwitch>
        </ModalContainer>
      )}
    </>
  );
};

export default ConfigIcon;