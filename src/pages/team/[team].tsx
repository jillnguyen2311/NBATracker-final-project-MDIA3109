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
  Blocks: number;
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
  return (
    <main>
      <Nav></Nav>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {playerStats.map((data) => (
            <div className="border rounded shadow" key={data.PlayerID}>
              <h3 className="text-lg text-center mt-2">{data.Name}</h3>
              <h3 className="text-lg text-center mt-2">{data.Position}</h3>
              <ul className="text-sm">
                <li>PPG: {data.Points}</li>
                <li>APG: {data.Assists}</li>
                <li>RPG: {data.Rebounds}</li>
                <li>SPG: {data.Steals}</li>
                <li>BPG: {data.Blocks}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Team;