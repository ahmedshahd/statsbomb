import React from 'react';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  red?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  red = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = red ? 'button--red' : 'button--grey';
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
