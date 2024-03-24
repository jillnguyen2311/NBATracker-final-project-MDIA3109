// Home.tsx

import Nav from './components/Nav'
import Head from 'next/head'
import Footer from './components/Footer'
import styles from '../styles/index.module.css'
import Card from './components/Card'

export default function Home() {
  return (
    <main style={{ fontFamily: "Almarai, sans-serif" }}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.header}>
        <Nav />
      </div>

      <div className={styles.hero}>
        <div className={styles.one}>
          <div className={styles.contentContainer}>
            <h1 style={{ fontSize: "60px", textAlign: "left", color: "#FBFFF4", fontWeight: "bold", transform: `skew(30deg)` }}>
              This Is Basketball
            </h1>
            <p style={{ fontSize: "20px", textAlign: "left", color: "#FBFFF4", transform: `skew(30deg)`, maxWidth: "500px", paddingLeft: "70px" }}>
              Find the most accurate and latest information regarding basketball here at OddBall.
              From live game odds to player and team stats, everything you will ever need to find will be here.
            </p>
          </div>
        </div>
        <div className={styles.two}>
          <img src="/images/nikola.png" alt="Player Nikola" className={`${styles.playerImage} ${styles.animation}`} />
        </div>
      </div>

      <div className={styles.live}>
        <div className={styles.liveText}>
          <h1 style={{ fontSize: "50px", textAlign: "center", color: "#595959", fontWeight: "bold", marginBottom: "40px" }}>Live Games</h1>
        </div>
        <div className={styles.cardContainer}>
          <Card />
          <Card />
        </div>
      </div>

      <div className={styles.partner}>
        <h1 style={{ fontSize: "50px", textAlign: "center", color: "#FBFFF4", fontWeight: "bold", marginBottom: "20px" }}>Partners</h1>
        <div className={styles.partnerName}>
          <h2>Edge</h2>
          <h2>NBA</h2>
          <h2>T-Mobile</h2>
          <h2>Rogers</h2>
          <h2>ESPN</h2>
        </div>
      </div>

      <div className={styles.live}>
        <div className={styles.liveText}>
          <h1 style={{ fontSize: "50px", textAlign: "center", color: "#595959", fontWeight: "bold", marginBottom: "40px" }}>Current News</h1>
        </div>
        <div className={styles.cardContainer}>
          <Card />
          <Card />
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  )
}
