import React from "react";
import styled, { css } from "styled-components";

export interface PiaButtonProps {
  onClick?: () => void;
  text?: string;
  variant?: 'primary' | 'secondary';
}

const Button = styled.button<PiaButtonProps>`
  background: ${(props: PiaButtonProps) => props.variant === 'primary' ? '#eb9b00' : '#fff'};
  padding: 16px 32px;
  border: #eb9b00 2px solid;
  color: ${(props: PiaButtonProps) => props.variant === 'primary' ? '#fff' : '#eb9b00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: PiaButtonProps) => props.variant === 'primary'
    ? css`
      &:hover {
        background: #b87900;
        border: #b87900 2px solid;
      }
    `
    : css`
      &:hover {
        background: #fff;
        border: #b87900 2px solid;
        color: #b87900;
      }
    `
  };
`

const PiaButton = ({
  onClick,
  text = 'click here!',
  variant = 'primary'
}: PiaButtonProps) => {
  return(
    <Button onClick={onClick} variant={variant}>
      { text }
    </Button>
  )
}

export default PiaButton;