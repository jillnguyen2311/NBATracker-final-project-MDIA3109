import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Head from 'next/head';
import Footer from './components/Footer';
import Card from './components/Card';

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

export default function LiveGames() {
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
                console.log(response.data);
                setGames(response.data);
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
                        acc[team.Key] = team.WikipediaLogoUrl; // Use 'Key' if it's unique for each team
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
        <main style={{ fontFamily: "Almarai, sans-serif" }}>
            <Head>
                <title>Live Games</title>
            </Head>
            <Nav />
            <h1 className="text-black text-center font-bold text-4xl py-10">Live and Upcoming Games</h1>

            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12 mx-10 my-20">
                {games.map((game) => (
                    <div key={game.GameID} className={`border-4 ${isLive ? 'border-00A375' : 'border-FC9F5B'} border-FC9F5B rounded-lg shadow-lg p-6 bg-white flex flex-col items-center text-center gap-4`} style={{ width: "100%", justifyContent: "space-evenly" }}>
                        <div className="flex items-center justify-center gap-8 sm:gap-24 font-bold text-xl">
                            <span className="px-3 py-1 bg-FC9F5B rounded-full" style={{ borderRadius: '400px', fontSize: '18px' }}>{game.HomeTeamMoneyLine}</span>
                            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>ODDS</span>
                            <span className={`px-3 py-1 ${isLive ? 'bg-00A375' : 'bg-FC9F5B'} rounded-full`} style={{ borderRadius: '400px', fontSize: '18px' }}>{game.AwayTeamMoneyLine}</span>
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
                ))}
            </div>

            <Footer />
        </main>
    );
}
