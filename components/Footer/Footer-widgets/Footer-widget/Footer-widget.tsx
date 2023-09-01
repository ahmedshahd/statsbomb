import { ReactNode, ElementType } from 'react';
import classNames from 'classnames';

export type FooterWidgetProps = {
  as?: ElementType;
  titles: Array<string>;
  items?: Array<string>;
  children?: ReactNode;
};

/**
 * Main UI component for user interaction
 */
export const FooterWidget = ({
  as: Component = 'ul',
  titles,
  items,
  children,
  ...props
}: FooterWidgetProps) => {
  const FooterWidgetClassess = classNames(`footer-widget`);
  return (
    <Component className={FooterWidgetClassess} {...props}>
      {titles.map((title, index) => (
        <li key={index} className="footer-widget__title">
          <a>{title} </a>
        </li>
      ))}
      {items &&
        items.map((item, index) => (
          <li key={index} className="footer-widget__item">
            <a>{item}</a>
          </li>
        ))}
        {children}
    </Component>
  );
};
