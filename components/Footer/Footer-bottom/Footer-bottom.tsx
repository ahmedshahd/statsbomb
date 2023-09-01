import { ReactNode, ElementType } from 'react';
import classNames from 'classnames';

export type FooterBottomProps = {
  as?: ElementType;
  rightItem: string;
  middleItem: ReactNode;
  leftItem: string;
};

/**
 * Main UI component for user interaction
 */
export const FooterBottom = ({
  as: Component = 'ul',
  rightItem,
  middleItem,
  leftItem,
  ...props
}: FooterBottomProps) => {
  const FooterBottomClassess = classNames(`footer-bottom`);
  return (
    <Component className={FooterBottomClassess} {...props}>
      <li className="footer-bottom__item">{rightItem}</li>
      <li className="footer-bottom__item">{middleItem}</li>
      <li className="footer-bottom__item">{leftItem}</li>
    </Component>
  );
};
