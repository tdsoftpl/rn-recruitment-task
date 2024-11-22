import React from 'react';
import { StyledButton, ButtonText } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button = ({ onPress, children }: ButtonProps) => {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
