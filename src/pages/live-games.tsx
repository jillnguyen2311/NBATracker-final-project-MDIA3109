import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Head from 'next/head';
import Footer from './components/Footer';
import Card from './components/Card';

interface Game {
    id: number;
    league: string;
    season: number;
    date: {
        start: string;
        end: string;
    };
    duration: string;
    stage: number;
    status: {
        clock: string | null;
        halftime: boolean;
        short: number;
        long: string;
        periods: {
            current: number;
            total: number;
            endOfPeriod: boolean;
        };
    };
    arena: {
        name: string;
        city: string;
        state: string;
        country: string;
    };
    teams: {
        visitors: {
            id: number;
            name: string;
            nickname: string;
            code: string;
            logo: string;
            scores: {
                win: number;
                loss: number;
                series: {
                    win: number;
                    loss: number;
                };
                linescore: string[];
                points: number;
            };
        };
        home: {
            id: number;
            name: string;
            nickname: string;
            code: string;
            logo: string;
            scores: {
                win: number;
                loss: number;
                series: {
                    win: number;
                    loss: number;
                };
                linescore: string[];
                points: number;
            };
        };
    };
    officials: string[];
    timesTied: number;
    leadChanges: number;
    nugget: string | null;
}

export default function LiveGames() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        async function fetchLiveGames() {
            const options = {
                method: 'GET',
                url: 'https://api-nba-v1.p.rapidapi.com/games',
                params: { live: 'all' },
                headers: {
                    'X-RapidAPI-Key': '708227765cmshd45426b5899e082p15bca7jsn871aa32efb19',
                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setGames(response.data);
            } catch (error) {
                console.error('Error fetching live games:', error);
            }
        }

        fetchLiveGames();
    }, []);

    return (
        <main style={{ fontFamily: "Almarai, sans-serif" }}>
            <Head>
                <title>Live Games</title>
            </Head>
            <Nav />
            <h1 className="text-black text-center font-bold text-4xl py-10">Live Games</h1>
            <Card/>

            <div>
                {games.length > 0 ? (
                    games.map((game, index) => (
                        <div key={index} className="border-4 border-green-500 rounded-lg shadow-md p-4 mb-4">
                            <h2 className="text-xl font-semibold">{game.teams.visitors.name} vs {game.teams.home.name}</h2>
                            <p>Date: {new Date(game.date.start).toLocaleDateString()}</p>
                            <p>Time: {new Date(game.date.start).toLocaleTimeString()}</p>
                            <p>Arena: {game.arena.name}, {game.arena.city}, {game.arena.state}, {game.arena.country}</p>
                            <p>Status: {game.status.long}</p>
                            <p>Scores: {game.teams.visitors.scores.points} - {game.teams.home.scores.points}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No live games available</p>
                )}
            </div>

            <Footer />
        </main>
    );
}
