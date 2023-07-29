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
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
      >
        <path
          d="M13.4844 6.93945L1.48438 6.93945"
          stroke="white"
          stroke-linecap="round"
        ></path>
        <path
          d="M10.8047 3.43945L14.3402 6.97499L10.8047 10.5105"
          stroke="white"
          stroke-linecap="round"
        ></path>
      </svg>
    </a>
  );
};
