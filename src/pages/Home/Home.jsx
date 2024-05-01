import React from 'react'
import styles from './Home.module.scss';
import Container from '../../components/Tools/Container/Container';
export default function Home() {
  return (
        <section className={styles.homePage}>
      <Container large>
          <h1>Home Page</h1>
      </Container>
    </section>
  )
}