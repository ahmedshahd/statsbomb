// import { convertToValidUrlPath } from '@/utils';
import { Icon } from '@iconify/react';
import React from 'react';
type LinkProps = {
  varient: 'primary' | 'secondary' | 'tertiary';

  label: string;

  as?: React.ElementType;
  /**
   * Optional click handler
   *
   */
  onClick?: () => void;
};

/**
 * Primary UI component for user interaction
 */
export const Link = ({
  as: Component = 'a',
  varient,
  label,
  ...props
}: LinkProps) => {
  return (
    <Component className={`link link--${varient}`} {...props}>
      {label}
      <Icon
        icon="carbon:arrow-right"
        // width="16"
        // height="14"
      />
    </Component>
  );
};
