import Image from 'next/image'
import Nav from './components/Nav'
import Head from 'next/head'

export default function News() {
  return (
    <main style={{ fontFamily: "Almarai, sans-serif" }}>
      <Head>
        <title>Latest News</title>
      </Head>

      <Nav />
      <h1 className="text-black text-center font-bold text-4xl py-10">Latest News</h1>
    </main>
  )
}