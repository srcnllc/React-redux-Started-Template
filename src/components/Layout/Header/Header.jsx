import Container from '../../Tools/Container/Container';
import styles from './Header.module.scss';
import React, { useState } from 'react';

export default function Header() {
  const [active, setActive] = useState(true);
  const navList = [
    {
      title: 'Home',
      slug: '/',
    },
    {
      title: 'About',
      slug: '/about',
    },
    {
      title: 'Contact',
      slug: '/contact',
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <Container large>
          <div className={styles.topbar}>
            <a href="/" className={styles.logo}>
              <img src={'/logo.png'} alt='Logo'/>
            </a>
            <div className={`${styles.rightBar} d-md`}>
              <a href={'/'} className="btn white">
                BUTTON-1
              </a>
              <a href={'/'} className="btn green">
                <div className="icon">
                  <img src={'/images/icons/wallet.svg'} alt='wallet'/>
                </div>
                BUTTON-2
              </a>
            </div>
            <div
              onClick={() => setActive(!active)}
              className={`${styles.hamburger} ${
                active ? styles.active : ''
              } d-sm`}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </Container>
        <nav className={`${active ? styles.active : ''} `}>
          <ul>
            {navList.map((item, index) => (
              <li key={index}>
                <a href={item.slug}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
