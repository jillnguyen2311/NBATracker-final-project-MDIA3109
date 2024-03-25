import React from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from '../components/Footer';

interface PlayerStat {
  PlayerID: number;
  Name: string;
  Games: number;
  Position: string;
  Points: number;
  Assists: number;
  Rebounds: number;
  Steals: number;
  BlockedShots: number;
}

interface Team {
  Key: string;
  WikipediaLogoUrl: string;
}

export async function getServerSideProps(context: { params: { team: string; }; }): Promise<{ props: TeamProps & { teamLogoUrl: string } }> {
  const { team } = context.params;
  const season = new Date().getFullYear();

  const resTeams = await fetch('https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=8510cb2ee7e843c18bb57dda092bc77a');
  const teams = await resTeams.json() as Team[];

  const teamInfo = teams.find(t => t.Key === team);

  const resPlayerStats = await fetch(`https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByTeam/${season}/${team}?key=8510cb2ee7e843c18bb57dda092bc77a`);
  const playerStats: PlayerStat[] = await resPlayerStats.json();

  return {
    props: {
      playerStats,
      teamLogoUrl: teamInfo?.WikipediaLogoUrl || '',
    },
  };
}

interface TeamProps {
  playerStats: PlayerStat[];
  teamLogoUrl: string;
}

const Team: React.FC<TeamProps> = ({ playerStats, teamLogoUrl }) => {

  const statsPerGame = playerStats.map(player => ({
    ...player,
    Points: player.Games > 0 ? player.Points / player.Games : 0,
    Assists: player.Games > 0 ? player.Assists / player.Games : 0,
    Rebounds: player.Games > 0 ? player.Rebounds / player.Games : 0,
    Steals: player.Games > 0 ? player.Steals / player.Games : 0,
    BlockedShots: player.Games > 0 ? player.BlockedShots / player.Games : 0,
  }));

  return (
    <main>
      <Nav />
      <div className="container mx-auto my-12 p-4">
        <div className="flex justify-between items-center mb-12">
          <Link href="/season-stats">
            <div style={{
              border: "3px solid #00A375",
              borderRadius: "9999px",
              width: "125px",
              height: "50px",
              display: "flex",
              backgroundColor: "white",
              boxShadow: "3px 3px 5px 0px rgb(0, 0, 0, 0.3)",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
            }}>
              Back
            </div>
          </Link>
          <img src={teamLogoUrl} alt="Team Logo" style={{ width: "150px" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {statsPerGame.map((data) => (
            <div
              key={data.PlayerID}
              style={{
                border: "4px solid #000",
                borderRadius: "20px",
                boxShadow: "0 7px 8px rgba(0, 0, 0, 0.3)",
                padding: "20px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "300px",
                minHeight: "250px",
              }}
            >
              <h3 className="text-lg mb-4">{data.Name}</h3>
              <div className="flex">
                <div style={{ width: "200px", height: "100%", marginRight: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"/>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p>PPG: {data.Points.toFixed(1)}</p>
                  <p>APG: {data.Assists.toFixed(1)}</p>
                  <p>RPG: {data.Rebounds.toFixed(1)}</p>
                  <p>SPG: {data.Steals.toFixed(1)}</p>
                  <p>BPG: {data.BlockedShots.toFixed(1)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Team;