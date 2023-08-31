import React, { ReactNode, SVGProps } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  /**
   * Button style
   */
  variant: 'primary' | 'secondary' | 'text' | 'icon';
  /**
   * Button contents
   */
  as: React.ElementType;
  
  children?: ReactNode;
};

/**
 * Main UI component for user interaction
 */
export const Button = ({
  as: Component = 'button',
  variant = 'text',
  children,
  ...props
}: ButtonProps) => {
  const buttonClassess = classNames(`button`, `button--${variant}`);
  return (
    <Component type="button" className={buttonClassess} {...props}>
      {children}
    </Component>
  );
};
