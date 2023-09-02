import { Icon } from '@iconify/react';
import React from 'react';
import classNames from 'classnames';

type LinkProps = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'text';

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
  variant,
  label,
  isHighlited = false,
  ...props
}: LinkProps) => {
  const highlitedClassName = isHighlited ? 'link--text_highlited' : '';
  const linkClasses = classNames(
    'link',
    `link--${variant}`,
    highlitedClassName
  );

  return (
    <Component className={linkClasses} {...props}>
      {label}
      <Icon icon="bi:arrow-right" className="link__icon" />
    </Component>
  );
};
