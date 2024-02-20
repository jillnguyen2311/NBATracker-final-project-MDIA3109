import Image from 'next/image'
import Nav from './components/Nav'
import Card from './components/Card'
import Head from 'next/head'

export default function Home() {
    return (
        <body style={{ fontFamily: "Almarai, sans-serif" }}>
            <Head>
                <title>Live Games</title>
            </Head>
            <main>
                <Nav />
                <Card />
            </main>
        </body>
    )
}
