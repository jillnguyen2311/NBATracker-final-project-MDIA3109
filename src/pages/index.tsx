import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/home.module.css'
import Card from '../components/Card'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import { Article } from './news';

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

  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const apiUrl = 'https://tank01-fantasy-stats.p.rapidapi.com/getNBANews';
        const rapidApiKey = '708227765cmshd45426b5899e082p15bca7jsn871aa32efb19';

        const options = {
          method: 'GET',
          url: apiUrl,
          params: {
            recentNews: 'true',
            maxItems: '2' 
          },
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        const articlesArray = response.data.body;

        if (Array.isArray(articlesArray)) {
          const mappedNews: Article[] = articlesArray.map((item: any) => ({
            title: item.title,
            url: item.link,
            image: item.image
          }));
          setNews(mappedNews);
        } else {
          console.error('Response body is not an array:', articlesArray);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews();
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
        <Image className={styles.nikola} src="/images/legoat.png" alt="Basketball" width={1804} height={2700} />
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
                  <div>
                    {new Date(game.DateTime).toLocaleString('en-US', {
                      weekday: 'long',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true
                    })}
                  </div>
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

        <div className="mx-auto max-w-7xl mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="flex flex-wrap border-4 border-green-500 bg-white rounded-lg shadow-md flex p-4 min-w-0 md:min-w-[450px]">
              <div className="w-2/5">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full rounded-l-lg md:w-auto" />
              </div>
              <div className="w-3/5 p-6">
                <h2 className="text-xl font-semibold text-center md:text-left">{article.title.slice(0, 50)}</h2>
                <p className="mt-4 text-gray-800">{article.title.slice(0, 300)}...</p>
                <div className="mt-4 text-center md:text-left">
                  <a href={article.url} className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Read more ➜</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No news available</p>
        )}
      </div>
      </div>

      <Footer />
    </main>
  );
};