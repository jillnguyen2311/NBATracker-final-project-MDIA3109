import Image from 'next/image'
import Nav from './components/Nav'
import Card from './components/Card'
import Head from 'next/head'

export default function PlayerStats() {
    return (
        <main style={{ fontFamily: "Almarai, sans-serif" }}>
            <Head>
                <title>Player Stats</title>
            </Head>
            <Nav />
            <h1 className="text-black text-center font-bold text-4xl py-10">Player Stats</h1>
            <Card />
        </main>
    )
}
