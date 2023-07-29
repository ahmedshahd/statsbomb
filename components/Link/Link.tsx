// import { convertToValidUrlPath } from '@/utils';
import React from 'react';
import { convertToValidUrlPath } from '../utils';

type LinkProps = {
  /**
   * Is this the principal call to action on the page?
   */
  red?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the link be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * link contents
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
export const Link = ({
  red = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: LinkProps) => {
  const mode = red ? 'link--red' : 'link--grey';
  return (
    <a
      className={['link', `link--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      href={convertToValidUrlPath(label)}
      {...props}
    >
      {label}
    </a>
  );
};
