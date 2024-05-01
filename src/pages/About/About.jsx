import React from 'react'
import styles from './About.module.scss';
import Container from '../../components/Tools/Container/Container';
export default function About() {
  return (
        <section className={styles.aboutPage}>
      <Container large>
          <h1>About Page</h1>
      </Container>
    </section>
  )
}