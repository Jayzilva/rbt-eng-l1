import type { ReactNode } from 'react';

export interface CardProps {
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export function Card({ title, imageUrl, imageAlt, actions, children }: CardProps) {
  return (
    <article className="card">
      {imageUrl && <img className="card__image" src={imageUrl} alt={imageAlt ?? ''} />}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        {children && <div className="card__content">{children}</div>}
      </div>
      {actions && <div className="card__actions">{actions}</div>}
    </article>
  );
}
