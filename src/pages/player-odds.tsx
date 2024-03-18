import Image from 'next/image'
import Nav from './components/Nav'
import Head from 'next/head'
import Footer from './components/Footer'

export default function PlayerOdds() {
  return (
    <main style={{ fontFamily: "Almarai, sans-serif" }}>
      <Head>
        <title>Player Odds</title>
      </Head>

      <Nav />
      <h1 className="text-black text-center font-bold text-4xl py-10">Player Odds</h1>
    <Footer />
    </main>
  )
}