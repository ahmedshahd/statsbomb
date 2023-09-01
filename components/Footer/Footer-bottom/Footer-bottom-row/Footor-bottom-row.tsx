import {  ElementType } from 'react';
import classNames from 'classnames';
import React from 'react';

export type FooterBottomRowProps = {
  as?: ElementType;
  items: Array<string>;
};

/**
 * Main UI component for user interaction
 */
export const FooterBottomRow = ({
  as: Component = 'ul',
  items,
  ...props
}: FooterBottomRowProps) => {
  const FooterBottomRowClassess = classNames(`footer-bottom-row`);
  return (
    <Component className={FooterBottomRowClassess} {...props}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <li className='footer-bottom-row__item'>
            <a>{item}</a>
          </li>
          {index < items.length - 1 && (
            <li className='footer-bottom-row__divider'>
              <span>|</span>
            </li>
          )}
        </React.Fragment>
      ))}
    </Component>
  );
};
