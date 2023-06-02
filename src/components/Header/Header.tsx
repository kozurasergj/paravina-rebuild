/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { KeyboardEvent } from 'react';
import styles from '@/components/Header/Header.module.css';

import { Hero } from '../Hero/Hero';

const pages = [
  { label: 'Акции', href: '/' },
  { label: 'Услуги', href: '/' },
  { label: 'О клинике', href: '/about' },
];

interface IHeaderProps {
  isVisible: boolean;
}

export const Header = ({ isVisible }: IHeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles['header-wrapper']}>
      <div className={cn(isVisible && styles['header-visible'], styles[`header`])}>
        <Image
          src={
            'https://res.cloudinary.com/dkqwi0tah/image/upload/q_auto/v1685611696/Paravina-rebuild/header-logo_yb87e1.png'
          }
          width={384}
          height={110}
          alt="лого"
          className={cn(styles['header-logo'])}
        />
        <nav
          className={cn(styles['header-nav'], {
            [styles.active]: open,
          })}
        >
          {pages.map(({ label, href }, index) => (
            <Link href={href} key={index} className={styles['header-link']}>
              {label}
            </Link>
          ))}
        </nav>
        <div
          className={cn('hamburger', {
            'is-active': open,
          })}
          onClick={() => setOpen(!open)}
          role="button"
          tabIndex={0}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      {!isVisible && <Hero />}
    </header>
  );
};
