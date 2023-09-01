import { ReactNode, ElementType } from 'react';
import classNames from 'classnames';

type FooterProps = {
  /**
   * Footer wraper
   */
  as: ElementType;
  /***
   * Footer Widgets
   */
  footerWidgets: ReactNode;

  /***
   * Footer Bottom
   */

  footerBottom: ReactNode;
  /**
   * Footer children
   */
  // children?: ReactNode;
};

/**
 * Main UI component for user interaction
 */
export const Footer = ({
  as: Component = 'footer',
  footerWidgets,
  footerBottom,
  ...props
}: FooterProps) => {
  const FooterClassess = classNames(`Footer`);
  return (
    <Component className={FooterClassess} {...props}>
      <section className="Footer__widgets">{footerWidgets}</section>
      <section className="Footer__bottom">{footerBottom}</section>
    </Component>
  );
};
