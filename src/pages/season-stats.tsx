import Link from 'next/link';
import Nav from './components/Nav';

interface Team {
    TeamID: number;
    Key: string;
    City: string;
    Name: string;
    WikipediaLogoUrl: string;
    Wins: number;
    Losses: number;
}

interface TeamsWithStatsProps {
    teamsWithStats: Team[];
}

export async function getStaticProps(): Promise<{ props: TeamsWithStatsProps; revalidate: number }> {

    const season = new Date().getFullYear();
    const resTeams = await fetch('https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=8510cb2ee7e843c18bb57dda092bc77a');
    const teams = await resTeams.json();

    const resStats = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/${season}?key=8510cb2ee7e843c18bb57dda092bc77a`);
    const teamStats = await resStats.json();
    const limitedTeams = teams.slice(0, 30);

    // Combine team and stats data
    const teamsWithStats: Team[] = limitedTeams.map((team: { TeamID: any; }) => {
        const stats = teamStats.find((stat: { TeamID: any; }) => stat.TeamID === team.TeamID);
        return {
            ...team,
            Wins: stats?.Wins || 0,
            Losses: stats?.Losses || 0,
        };
    });

    return {
        props: { teamsWithStats },
        revalidate: 60,
    };
}

const SeasonStats: React.FC<TeamsWithStatsProps> = ({ teamsWithStats }) => {
    return (
        <main>
            <Nav></Nav>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {teamsWithStats.map((team) => (
                        <Link href={`/team/${team.Key}`} key={team.TeamID}>
                            <div className="p-4">
                                <img src={team.WikipediaLogoUrl} alt={team.Name} className="h-20 mx-auto" />
                                <h2 className="text-lg text-center mt-2">{team.City} {team.Name}</h2>
                                <p className="text-sm text-center">Wins: {team.Wins} | Losses: {team.Losses}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SeasonStats;