import React from "react";
import styled, { css } from "styled-components";

export interface PiaButtonProps {
  onClick?: () => void;
  text?: string;
  variant?: 'primary' | 'secondary';
}

const Button = styled.button<PiaButtonProps>`
  background: ${(props: PiaButtonProps) => props.variant === 'primary' ? '#006fe6' : '#fff'};
  padding: 16px 32px;
  border: #006fe6 2px solid;
  color: ${(props: PiaButtonProps) => props.variant === 'primary' ? '#fff' : '#006fe6'};
  font-size: 20px;
  cursor: pointer;
  ${(props: PiaButtonProps) => props.variant === 'primary'
    ? css`
      &:hover {
        background: #0056b3;
        border: #0056b3 2px solid;
      }
    `
    : css`
      &:hover {
        background: #fff;
        border: #0056b3 2px solid;
        color: #0056b3;
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