import { ReactNode, ElementType } from 'react';
import classNames from 'classnames';
import { FooterBottomRow } from './Footer-bottom-row';

export type FooterBottomProps = {
  as?: ElementType;
  // rightItem: string;
  // middleItem: ReactNode;
  // leftItem: string;
};

/**
 * Main UI component for user interaction
 */
export const FooterBottom = ({
  as: Component = 'ul',
  // rightItem,
  // middleItem,
  // leftItem,
  ...props
}: FooterBottomProps) => {
  const FooterBottomClassess = classNames(`footer-bottom`);
  return (
    <Component className={FooterBottomClassess} {...props}>
      <li className="footer-bottom__item">
        Copyright © 2022 StatsBomb Inc. All rights reserved
      </li>
      <li className="footer-bottom__item">
        <FooterBottomRow
          items={[
            'Privacy Policy',
            'All images (c) PA Images',
            'Recruitment Privacy Policy',
            'International Data Transfers',
          ]}
        />
      </li>
      <li className="footer-bottom__item">United Kingdom</li>
    </Component>
  );
};
