import React, { ReactNode, SVGProps } from 'react';

type ButtonProps = {
  /**
   * Button style
   */
  varient: 'primary' | 'secondary' | 'text' | 'icon';
  /**
   * Button contents
   */
  children?: ReactNode;

};

/**
 * Main UI component for user interaction
 */
export const Button = ({
  varient = 'text',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={`button button--${varient}`} {...props}>
      {children}
    </button>
  );
};
