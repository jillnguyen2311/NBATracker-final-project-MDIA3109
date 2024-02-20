import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Head from 'next/head';

interface Player {
    id: number;
    firstname: string;
    lastname: string;
    birth: {
        date: string; 
        country: string; 
    };
    height: {
        feets: number | null; 
        inches: number | null; 
        meters: number | null; 
    };
    weight: {
        pounds: number | null; 
        kilograms: number | null; 
    };
    college: string | null; 
    affiliation: string;
    leagues: {
        standard: {
            jersey: number;
            active: boolean;
            pos: string | null; 
        };
    };
}

export default function PlayerStats() {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        async function fetchPlayers() {
            const options = {
                method: 'GET',
                url: 'https://api-nba-v1.p.rapidapi.com/players/playerId/17',
                headers: {
                  'X-RapidAPI-Key': '708227765cmshd45426b5899e082p15bca7jsn871aa32efb19',
                  'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
                }
              };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setPlayers(response.data.response); 
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        }

        fetchPlayers();
    }, []);

    return (
        <main style={{ fontFamily: "Almarai, sans-serif" }}>
            <Head>
                <title>Player Stats</title>
            </Head>
            <Nav />
            <h1 className="text-black text-center font-bold text-4xl py-10">Player Stats</h1>

            <div>
                {players.length > 0 ? (
                    players.map((player, index) => (
                        <div key={index} className="border-4 border-green-500 rounded-lg shadow-md p-4 mb-4">
                            <h2 className="text-xl font-semibold">{player.firstname} {player.lastname}</h2>
                            <p>NBA Start year: {player.birth.date}</p>
                            <p>Country: {player.birth.country}</p>
                            <p>Height: {player.height.feets} feet, {player.height.inches} inches, ({player.height.meters} meters)</p>
                            <p>Weight: {player.weight.pounds} pounds, ({player.weight.kilograms} kilograms)</p>
                            <p>Affiliation: {player.affiliation}</p>
                            <p>Position: {player.leagues.standard.pos}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No players available</p>
                )}
            </div>
        </main>
    );
}
