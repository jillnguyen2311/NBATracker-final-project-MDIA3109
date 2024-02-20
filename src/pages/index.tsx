import Image from 'next/image'
import Nav from './components/Nav'
import Head from 'next/head'
import Footer from './components/Footer'


export default function Home() {
  return (
    <main style={{ fontFamily: "Almarai, sans-serif" }}>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />
      <h1 className="text-black text-center font-bold text-4xl py-10">Home</h1>
      <h3 className="text-center mt-5 text-2xl font-bold text-black">Your One Stop For All The Odds</h3>

      <div style={{width: "100%", height: "100%", display: "flex", alignContent: "space-evenly", justifyContent: "space-evenly", marginTop: "40px"}}>
        <div style={{textAlign: "center"}}>
          <Image style={{borderRadius: "15px", border: "4px solid #00A375"}} src={"/images/Gamer.jpg"} width={600} height={600} alt='Guy' />
          <p style={{fontSize: "18px", marginTop: "10px"}}>Keep up with current news</p>
        </div>
        <div style={{textAlign: "center"}}>
          <Image style={{borderRadius: "15px", border: "4px solid #00A375"}} src={"/images/Happy.jpg"} width={600} height={600} alt='People'/>
          <p style={{fontSize: "18px", marginTop: "10px"}}>Keep updated on live plays</p>
        </div>
      </div>

      <Footer />
    </main>
  )
}