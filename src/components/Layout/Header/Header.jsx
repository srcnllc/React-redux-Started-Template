import Container from '../../Tools/Container/Container';
import styles from './Header.module.scss';
import React, { useState } from 'react';

export default function Header() {
  const [active, setActive] = useState(true);
  const navList = [
    {
      title: 'Hakkında',
      slug: '/#about',
    },
    {
      title: 'link1',
      slug: '/how-to-buy/#buy',
    },
    {
      title: 'link2',
      slug: '/how-to-buy',
    },
    {
      title: 'iletişim',
      slug: '/#roadmap',
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <Container large>
          <div className={styles.topbar}>
            <a href="/" className={styles.logo}>
              <img src={'/logo.png'} />
            </a>
            <div className={`${styles.rightBar} d-md`}>
              <a href={'/'} className="btn white">
                BUTTON-1
              </a>
              <a href={'/'} className="btn green">
                <div className="icon">
                  <img src={'/images/icons/wallet.svg'} />
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
