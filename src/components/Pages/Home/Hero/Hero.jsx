import styles from './Hero.module.scss';
import React from 'react';
import Container from '@/components/Tools/Container/Container';
import Img from '@/components/Tools/Img/Img';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container large>
        <div className={styles.heroImg}>
          <Img src={'/images/hero/hero.png'} />
        </div>
      </Container>
    </section>
  );
}
