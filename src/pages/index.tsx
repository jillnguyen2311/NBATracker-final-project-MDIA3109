import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/home.module.css'
import Card from '../components/Card'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';

interface Game {
  GameID: number;
  Season: number;
  SeasonType: number;
  Status: string;
  Day: string;
  DateTime: string;
  AwayTeam: string;
  HomeTeam: string;
  AwayTeamID: number;
  HomeTeamID: number;
  StadiumID: number;
  Channel: string;
  Attendance: null | number;
  AwayTeamScore: null | number;
  HomeTeamScore: null | number;
  Updated: string;
  Quarter: null | number;
  TimeRemainingMinutes: null | number;
  TimeRemainingSeconds: null | number;
  PointSpread: number;
  OverUnder: number;
  AwayTeamMoneyLine: number;
  HomeTeamMoneyLine: number;
  GlobalGameID: number;
  GlobalAwayTeamID: number;
  GlobalHomeTeamID: number;
  PointSpreadAwayTeamMoneyLine: number;
  PointSpreadHomeTeamMoneyLine: number;
  LastPlay: string;
  IsClosed: boolean;
  GameEndDateTime: null | string;
  HomeRotationNumber: number;
  AwayRotationNumber: number;
  NeutralVenue: boolean;
  OverPayout: number;
  UnderPayout: number;
  CrewChiefID: number;
  UmpireID: number;
  RefereeID: number;
  AlternateID: null | number;
  DateTimeUTC: string;
}

interface Team {
  TeamID: number;
  Key: string;
  WikipediaLogoUrl: string;
}

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [teamLogos, setTeamLogos] = useState<{ [key: string]: string }>({});
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchGamesForToday = async () => {
      const today = new Date().toISOString().slice(0, 10);
      const formattedDate = today.toUpperCase().replace('-', '-').replace('-', '-');

      const url = `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${formattedDate}?key=8510cb2ee7e843c18bb57dda092bc77a`;

      try {
        const response = await axios.get(url);
        const firstThreeGames = response.data.slice(0, 3);
        setGames(firstThreeGames);
      } catch (error) {
        console.error('Error fetching games for today:', error);
      }
    };

    const fetchTeamLogos = async () => {
      try {
        const response = await fetch('https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=8510cb2ee7e843c18bb57dda092bc77a');
        const teams = await response.json();

        if (Array.isArray(teams)) {
          const logos = teams.reduce((acc: { [key: string]: string }, team: any) => {
            acc[team.Key] = team.WikipediaLogoUrl;
            return acc;
          }, {});
          setTeamLogos(logos);
        } else {
          throw new Error('Teams data is not an array');
        }
      } catch (error) {
        console.error('Error fetching team logos:', error);
      }
    };

    const checkLiveGames = async () => {
      try {
        const response = await axios.get('https://api.sportsdata.io/v3/nba/scores/json/AreAnyGamesInProgress?key=8510cb2ee7e843c18bb57dda092bc77a');
        setIsLive(response.data);
      } catch (error) {
        console.error('Error checking live games:', error);
      }
    };

    fetchGamesForToday();
    fetchTeamLogos();
    const liveGamesCheckInterval = setInterval(checkLiveGames, 5000);

    return () => clearInterval(liveGamesCheckInterval);
  }, []);

  return (
    <main className={styles.main} style={{ fontFamily: "Almarai, sans-serif" }}>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />

      <div className={styles.heroTextContainer}>
        <div className={styles.heroText}>
          <h1 style={{ fontSize: "60px", color: "#FBFFF4", fontWeight: "bold", marginTop: "20rem" }}>
            This Is Basketball
          </h1>
          <p style={{ fontSize: "20px", color: "#FBFFF4", maxWidth: "500px" }}>
            Find the most accurate and latest information regarding basketball here at OddBall.
            From live game odds to player and team stats, everything you will ever need to find will be here.
          </p>
        </div>
        <Image className={styles.nikola} src="/images/nikola.png" alt="Basketball" width={300} height={200} />
      </div>

      <div className={styles.hero}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
      </div>

      <div className={styles.live}>
        <div className={styles.liveText}>
          <h1 className='text-center items-center justify-center' style={{ fontSize: "50px", textAlign: "center", color: "#595959", fontWeight: "bold", marginBottom: "40px" }}>Live Games</h1>
        </div>
        <div className="flex flex-wrap 2xl:flex-row items-center justify-center text-center">
          {games.map((game) => (
            <div className="flex mx-6 mb-6">
              <Link href="/live-games" key={game.GameID} passHref>
                <div key={game.GameID} className={`border-4 ${isLive ? 'border-customGreen' : 'border-customOrange'} rounded-lg shadow-lg p-6 bg-white flex flex-col items-center text-center gap-4`} style={{ width: "100%", justifyContent: "space-evenly" }}>
                  <div className="flex items-center justify-center gap-8 sm:gap-24 font-bold text-xl">
                    <span className={`px-3 py-1 ${isLive ? 'bg-customGreen' : 'bg-customOrange'} rounded-full`} style={{ borderRadius: '400px', fontSize: '18px' }}>{game.HomeTeamMoneyLine}</span>
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>ODDS</span>
                    <span className={`px-3 py-1 ${isLive ? 'bg-customGreen' : 'bg-customOrange'} rounded-full`} style={{ borderRadius: '400px', fontSize: '18px' }}>{game.AwayTeamMoneyLine}</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 sm:gap-20 my-2">
                    <img src={teamLogos[game.HomeTeam]} alt="Home Team" className="w-24 h-24" />
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>VS</span>
                    <img src={teamLogos[game.AwayTeam]} alt="Away Team" className="w-24 h-24" />
                  </div>
                  <div className="flex items-center justify-center gap-10 sm:gap-24 font-bold text-4xl">
                    <span>{game.HomeTeam}</span>
                    <span></span>
                    <span>{game.AwayTeam}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.partner}>
        <h1 style={{ fontSize: "50px", textAlign: "center", color: "#FBFFF4", fontWeight: "bold", marginBottom: "20px" }}>Partners</h1>
        <div className={styles.partnerName}>
          <h2>Edge</h2>
          <h2>NBA</h2>
          <h2>T-Mobile</h2>
          <h2>Rogers</h2>
          <h2>ESPN</h2>
        </div>
      </div>

      <div className={styles.live}>
        <div className={styles.liveText}>
          <h1 style={{ fontSize: "50px", textAlign: "center", color: "#595959", fontWeight: "bold", marginBottom: "40px" }}>Current News</h1>
        </div>
        <div className={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Footer />
    </main>
  );
};