import React, { ButtonHTMLAttributes, FC } from "react";
import './button.scss';


export interface Props {
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  outline?: boolean;
  type: 'button' | 'reset' | 'submit';
  readonly?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

export const PiaButton: FC<ButtonProps> = ({
  className = '',
  children = 'button',
  variant = 'primary',
  type = 'button',
  outline,
  size = 'medium',
  disabled,
  ...props
}: ButtonProps) => {

  let classes = 'button';

  classes += className ? ` ${className}` : '';
  classes += variant === 'primary' ? ' button--primary' : '';
  classes += variant === 'secondary' ? ' button--secondary' : '';
  classes += variant === 'success' ? ' button--success' : '';
  classes += variant === 'warning' ? ' button--warning' : '';
  classes += variant === 'danger' ? ' button--danger' : '';
  classes += outline === true ? ' button--outline' : '';
  classes += size === 'small' ? ' button--small' : '';
  classes += size === 'medium' ? ' button--medium' : '';
  classes += size === 'large' ? ' button--large' : '';
  classes += disabled === true ? ' button--disabled' : '';

  return(
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}

export default PiaButton;