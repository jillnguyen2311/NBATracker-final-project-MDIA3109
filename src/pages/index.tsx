import Image from 'next/image'
import Nav from './components/Nav'
import Head from 'next/head'

export default function Home() {
  return (
    <body style={{ fontFamily: "Almarai, sans-serif" }}>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Nav />
        <h1 style={{ alignContent: "center", textAlign: "center", marginTop: "400px", fontSize: "2.9em" }}>"Your One Stop For All The Odds"</h1>
      </main>
    </body>
  )
}
