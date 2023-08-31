import { Icon } from '@iconify/react';
import React from 'react';
import classNames from 'classnames';

type LinkProps = {
  varient: 'primary' | 'secondary' | 'text';

  label: string;

  as?: React.ElementType;

  isHighlited?: boolean;
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
  isHighlited = false,
  ...props
}: LinkProps) => {
  const highlitedClassName = isHighlited ? 'link--text_highlited' : '';
  const linkClasses = classNames(
    'link',
    `link--${varient}`,
    highlitedClassName
  );

  return (
    <Component className={linkClasses} {...props}>
      {label}
      <Icon icon="carbon:arrow-right" className="link__icon" />
    </Component>
  );
};
