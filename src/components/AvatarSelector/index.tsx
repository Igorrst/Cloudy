import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  WarningBanner,
  WarningText,
  CategoriesContainer,
  CategoryTitle,
  AvatarsGrid,
  AvatarOption,
  AvatarImage,
  SelectedIndicator,
  ButtonContainer,
  SaveButton,
  CancelButton,
} from "./styles";
import { avatarCategories } from "../../data/avatars";

interface AvatarSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (avatarUrl: string) => void;
  currentAvatar?: string;
}

const AvatarSelector = ({
  isOpen,
  onClose,
  onSelect,
  currentAvatar,
}: AvatarSelectorProps) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(
    currentAvatar || null
  );

  useEffect(() => {
    if (isOpen) {
      setSelectedAvatar(currentAvatar || null);
    }
  }, [isOpen, currentAvatar]);

  const handleSelect = (avatarUrl: string) => {
    setSelectedAvatar(avatarUrl);
  };

  const handleSave = () => {
    if (selectedAvatar) {
      onSelect(selectedAvatar);
      onClose();
    }
  };

  const handleCancel = () => {
    setSelectedAvatar(currentAvatar || null);
    onClose();
  };

  const getCategoryDisplayName = (categoryName: string): string => {
    if (categoryName === "strangerThings") return "Stranger Things";
    if (categoryName === "blackMirror") return "Black Mirror";
    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleCancel}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Escolher Avatar</ModalTitle>
          <ModalCloseButton onClick={handleCancel}>
            <X size={20} />
          </ModalCloseButton>
        </ModalHeader>

        <WarningBanner>
          <WarningText>
            ⚠️ Esta funcionalidade é temporária e apenas para testes. O backend ainda está em desenvolvimento.
          </WarningText>
        </WarningBanner>

        <CategoriesContainer>
          {Object.entries(avatarCategories).map(([categoryName, avatars]) => (
            <div key={categoryName}>
              <CategoryTitle>{getCategoryDisplayName(categoryName)}</CategoryTitle>
              <AvatarsGrid>
                {avatars.map((avatarUrl, index) => (
                  <AvatarOption
                    key={`${categoryName}-${index}`}
                    onClick={() => handleSelect(avatarUrl)}
                    $isSelected={selectedAvatar === avatarUrl}
                  >
                    <AvatarImage 
                      src={avatarUrl} 
                      alt={`Avatar ${index + 1}`}
                    />
                    {selectedAvatar === avatarUrl && (
                      <SelectedIndicator>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                            fill="white"
                          />
                        </svg>
                      </SelectedIndicator>
                    )}
                  </AvatarOption>
                ))}
              </AvatarsGrid>
            </div>
          ))}
        </CategoriesContainer>

        <ButtonContainer>
          <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
          <SaveButton onClick={handleSave} disabled={!selectedAvatar}>
            Salvar
          </SaveButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AvatarSelector;

