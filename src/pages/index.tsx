import Image from 'next/image'
import Nav from './components/Nav'
import Head from 'next/head'

export default function Home() {
  return (
    <main style={{ fontFamily: "Almarai, sans-serif" }}>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />
      <h1 className="text-black text-center font-bold text-4xl py-10">Home</h1>
      <h3 className="text-center mt-5 text-2xl font-bold text-black">Your One Stop For All The Odds</h3>
    </main>
  )
}