import Image from 'next/image'

export default function Home() {
  return (
    <body style={{ fontFamily: "Almarai, sans-serif" }}>

      <main>
        <header style={{
          maxWidth: "100%",
          maxHeight: "100%",
          backgroundColor: "#FC9F5B",
          alignContent: "space-between",
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "space-between",
          paddingTop: "15px",
          paddingRight: "20px",
          paddingLeft: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          borderBottom: "5px solid green",
          boxShadow: "0px 2px 15px grey"
        }}>
          <img src='./images/OddBall.png'></img>
          <h1 style={{ paddingTop: "10px" }}>Player Odds</h1>
          <h1 style={{ paddingTop: "10px" }}>Live Games</h1>
          <h1 style={{ paddingTop: "10px" }}>Latest News</h1>
          <h1 style={{ paddingTop: "10px" }}>Player Stats</h1>
          <h1 style={{ paddingTop: "10px" }}>Season Stats</h1>
        </header>
        <div style={{
          maxHeight: "100%",
          maxWidth: "100%"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            maxHeight: "100%",
            justifyContent: "space-around"
          }}>
            <div style={{ backgroundColor: "white", width: "300px", height: "200px", borderStyle: "solid", borderWidth: "4px", borderRadius: "20px", borderColor: "#FC9F5B", margin: "20px" }}>Test</div>
            <div style={{ backgroundColor: "white", width: "300px", height: "200px", borderStyle: "solid", borderWidth: "4px", borderRadius: "20px", borderColor: "#FC9F5B", margin: "20px" }}>Test</div>
            <div style={{ backgroundColor: "white", width: "300px", height: "200px", borderStyle: "solid", borderWidth: "4px", borderRadius: "20px", borderColor: "#FC9F5B", margin: "20px" }}>Test</div>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            maxHeight: "100%",
            justifyContent: "space-around"
          }}>
            <div style={{ backgroundColor: "white", width: "300px", height: "200px", borderStyle: "solid", borderWidth: "4px", borderRadius: "20px", borderColor: "#FC9F5B", margin: "20px" }}>Test</div>
            <div style={{ backgroundColor: "white", width: "300px", height: "200px", borderStyle: "solid", borderWidth: "4px", borderRadius: "20px", borderColor: "#FC9F5B", margin: "20px" }}>Test</div>
            <div style={{ backgroundColor: "white", width: "300px", height: "200px", borderStyle: "solid", borderWidth: "4px", borderRadius: "20px", borderColor: "#FC9F5B", margin: "20px" }}>Test</div>
          </div>
        </div>
      </main>
    </body>
  )
}
