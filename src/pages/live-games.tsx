import Image from 'next/image'
import Nav from './components/Nav'
import Card from './components/Card'
import Head from 'next/head'
import Footer from './components/Footer'

export default function LiveGames() {
    return (
        <main style={{ fontFamily: "Almarai, sans-serif" }}>
            <Head>
                <title>Live Games</title>
            </Head>
            <Nav />
            <h1 className="text-black text-center font-bold text-4xl py-10">Live Games</h1>
            <Card />
            <Footer />
        </main>
    )
}
