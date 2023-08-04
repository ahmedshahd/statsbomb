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

  /**
   *  Icon SVG Component
   */
  icon?: () => React.JSX.Element;
};

/**
 * Main UI component for user interaction
 */
export const Button = ({
  varient = 'text',
  children,
  icon: Icon,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={`button button--${varient}`} {...props}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};
