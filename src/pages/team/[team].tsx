import React from "react";
import Nav from "../components/Nav";

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

interface TeamProps {
  playerStats: PlayerStat[];
}

export async function getServerSideProps(context: { params: { team: any; }; }): Promise<{ props: TeamProps }> {
  const { team } = context.params;
  const season = new Date().getFullYear();
  console.log(season);

  const resPlayerStats = await fetch(`https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByTeam/${season}/${team}?key=8510cb2ee7e843c18bb57dda092bc77a`);
  const data = await resPlayerStats.json();

  console.log(data);

  const playerStats = Array.isArray(data) ? data : [];

  return {
    props: {
      playerStats,
    },
  };
}

const Team: React.FC<TeamProps> = ({ playerStats }) => {

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
      <Nav></Nav>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {statsPerGame.map((data) => (
            <div className="border rounded shadow" key={data.PlayerID}>
              <h3 className="text-lg text-center mt-2">{data.Name}</h3>
              <h3 className="text-lg text-center mt-2">{data.Position}</h3>
              <ul className="text-sm">
                <li>PPG: {data.Points.toFixed(2)}</li>
                <li>APG: {data.Assists.toFixed(2)}</li>
                <li>RPG: {data.Rebounds.toFixed(2)}</li>
                <li>SPG: {data.Steals.toFixed(2)}</li>
                <li>BPG: {data.BlockedShots.toFixed(2)}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Team;