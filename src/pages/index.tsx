import Image from 'next/image'
import Nav from './components/Nav'
import Card from './components/Card'

export default function Home() {
  return (
    <body style={{ fontFamily: "Almarai, sans-serif" }}>
      <main>
        <Nav/>
        <Card/>
      </main>
    </body>
  )
}
