import Nav from '../components/Nav'
import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/home.module.css'
import Card from '../components/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ fontFamily: "Almarai, sans-serif" }}>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />

      <div className={styles.heroTextContainer}>
        <div className={styles.heroText}>
          <h1 style={{ fontSize: "60px", color: "#FBFFF4", fontWeight: "bold", marginTop: "20rem" }}>
            This Is Basketball
          </h1>
          <p style={{ fontSize: "20px", color: "#FBFFF4", maxWidth: "500px" }}>
            Find the most accurate and latest information regarding basketball here at OddBall.
            From live game odds to player and team stats, everything you will ever need to find will be here.
          </p>
        </div>
        <Image className={styles.nikola} src="/images/nikola.png" alt="Basketball" width={300} height={200} />
      </div>

      <div className={styles.hero}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
      </div>

      <div className={styles.live}>
        <div className={styles.liveText}>
          <h1 style={{ fontSize: "50px", textAlign: "center", color: "#595959", fontWeight: "bold", marginBottom: "40px" }}>Live Games</h1>
        </div>
        <div className={styles.cardContainer}>
          <Card />
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
          <Card />
        </div>
      </div>

      <Footer />
    </main>
  );
}
