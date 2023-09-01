import { ReactNode, ElementType } from 'react';
import classNames from 'classnames';
import { Link } from '../../../../Link/Link';

export type FooterFormProps = {
  as?: ElementType;
  // button: ReactNode;
  children?: ReactNode;
};

/**
 * Main UI component for user interaction
 */
export const FooterForm = ({
  as: Component = 'form',
  // button,
  children,
  ...props
}: FooterFormProps) => {
  const FooterFormClassess = classNames(`footer-form`);
  return (
    <Component className={FooterFormClassess} {...props}>
      <input className='footer-form__input' placeholder="Your email address"></input>
      <Link as='a' variant='tertiary' label="Sign up" />
    </Component>
  );
};
