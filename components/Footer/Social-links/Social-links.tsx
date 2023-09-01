import { ReactNode, ElementType } from 'react';
import classNames from 'classnames';
import { Icon } from '@iconify/react';

export type SocialLinksProps = {
  as?: ElementType;
  icons: Array<string>;
  children?: ReactNode;
};

/**
 * Main UI component for user interaction
 */
export const SocialLinks = ({
  as: Component = 'ul',
  icons,
  ...props
}: SocialLinksProps) => {
  const SocialLinksClassess = classNames(`social-links`);
  return (
    <Component className={SocialLinksClassess} {...props}>
      {icons.map((icon,index) => (
          <li key={index} className="social-links__item">
            <a>
              <Icon className="social-links__icon" icon={icon}></Icon>
            </a>
          </li>
      ))}
    </Component>
  );
};
