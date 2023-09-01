import { ReactNode, ElementType } from 'react';
import classNames from 'classnames';
// import { FooterWidget } from './Footer-widget';
// import { SocialLinks } from './Footer-widget/Social-links';
// import { FooterForm } from './Footer-widget/Footer-form';

export type FooterWidgetsProps = {
  as?: ElementType;
  children: ReactNode;
};

/**
 * Main UI component for user interaction
 */
export const FooterWidgets = ({
  as: Component = 'section',
  children,
  ...props
}: FooterWidgetsProps) => {
  const FooterWidgetsClassess = classNames(`footer-widgets`);
  return (
    <Component className={FooterWidgetsClassess} {...props}>

      {
        children
      }
      {/* <FooterWidget
        titles={['Who We Are']}
        items={[
          'Our Culture',
          'Media',
          'Events',
          'Careers',
          'Contact Us',
          'Arqam Digital',
        ]}
      />
      <FooterWidget
        titles={['Who We Help']}
        items={[
          'Sports Teams',
          'Media',
          'Gambling',
          'Governing Bodies',
          'Case Studies',
          'Customer Success',
        ]}
      />
      <FooterWidget
        titles={['What We Do']}
        items={[
          'Soccer Data',
          'IQ Soccer',
          'IQ Live Soccer',
          'American Football Data & IQ',
          'Consultancy',
          'Media pack',
        ]}
      />
      <FooterWidget
        titles={['Login', 'Contact Us']}
        children={
          <SocialLinks icons={['bi:twitter', 'bi:youtube', 'bi:linkedin']} />
        }
      />
      <FooterWidget
        titles={['Sign up to our email newsletter']}
        children={<FooterForm />}
      /> */}
    </Component>
  );
};
