import React from 'react';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  red?: boolean;
  /**
   * Is this the principal call to action on the page?
   */
  white?: boolean;
  /**
   * Is this the principal call to action on the page?
   */
  grey?: boolean;
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
  label?: string;

  /**
   * Button Background
   */
  backgroundImage?: string;
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
  grey = false,
  white = false,
  size = 'medium',
  backgroundColor,
  label,
  backgroundImage,
  ...props
}: ButtonProps) => {
  const mode = white ? 'button--white' : red ? 'button--red' : 'button--grey';

  const buttonClass = backgroundImage
    ? `button button--${backgroundImage}`
    : `button button--${size} ${mode}`;

  return (
    <button
      type="button"
      className={buttonClass}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
