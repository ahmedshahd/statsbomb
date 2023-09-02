import { ReactNode, ElementType } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Icon } from '@iconify/react';

type CardProps = {
  /**
   * Card style
   */
  variant: 'primary' | 'secondary';
  /**
   * Card wraper
   */
  as: ElementType;
  /**
   * Card title
   */
  title: string;
  /**
   * Card title Compnoent
   */
  titleComponent: ElementType;
  /**
   * Card description
   */
  description?: string;
  /**
   * Card description Component
   */
  descriptionComponent?: ElementType;
  /**
   * Card imageUrl
   */
  imageUrl: string;
  /**
   * Card children
   */
  children?: ReactNode;
};

/**
 * Main UI component for user interaction
 */
export const Card = ({
  as: Component = 'a',
  variant = 'primary',
  title,
  titleComponent: Title = 'h6',
  description,
  descriptionComponent: Description = 'h4',
  imageUrl,
  children,
  ...props
}: CardProps) => {
  const CardClassess = classNames(`card`, `card--${variant}`);
  return (
    <Component className={CardClassess} {...props}>
      <header className="card__header">
        <Title>{title}</Title>
        <Icon icon="bi:arrow-right" className="card__icon" />
      </header>
      <section className="card__description">
      <Description>{description}</Description>
      </section>
      <div className="card__image">
        <img
          src={imageUrl}
          alt={description}
        />
      </div>
    </Component>
  );
};
