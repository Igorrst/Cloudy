import React from 'react';
import { SwitchContainer, HiddenInput, SwitchLabel, SwitchKnob } from './styles';

interface SwitchButtonProps {
    isChecked: boolean;
    onToggle: () => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ isChecked, onToggle }) => {
    return (
        <SwitchContainer onClick={onToggle}>
            <HiddenInput
                type="checkbox"
                checked={isChecked}
                onChange={onToggle}
            />
            <SwitchLabel checked={isChecked}>
                <SwitchKnob checked={isChecked} />
            </SwitchLabel>
        </SwitchContainer>
    );
};

export default SwitchButton;