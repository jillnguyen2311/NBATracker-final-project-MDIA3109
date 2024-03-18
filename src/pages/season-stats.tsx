import Link from 'next/link';
import Nav from './components/Nav';
import Head from 'next/head';
import Footer from './components/Footer';

interface Team {
    TeamID: number;
    Key: string;
    City: string;
    Name: string;
    Conference: string;
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

    const teamsWithStats: Team[] = limitedTeams.map((team: { TeamID: any; Conference: any; }) => {
        const stats = teamStats.find((stat: { TeamID: any; }) => stat.TeamID === team.TeamID);
        return {
            ...team,
            Conference: team.Conference, // Assuming this data is available from your API
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
    // Separate teams by conference
    const westTeams = teamsWithStats.filter(team => team.Conference === 'West');
    const eastTeams = teamsWithStats.filter(team => team.Conference === 'East');

    // Render teams by conference
    const renderTeams = (teams: Team[]) => (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teams.map((team) => (
                <Link href={`/team/${team.Key}`} key={team.TeamID}>
                    <a className="p-4 hover:shadow-lg" style={{
                        backgroundColor: "#fff",
                        border: "4px solid #00A375",
                        borderRadius: "20px",
                        boxShadow: "0 7px 8px rgba(0, 0, 0, 0.3)"
                    }}>
                        <img src={team.WikipediaLogoUrl} alt={team.Name} className="h-20 mx-auto" />
                        <h2 className="text-lg text-center mt-2">{team.City} {team.Name}</h2>
                        <p className="text-sm text-center">Wins: {team.Wins} | Losses: {team.Losses}</p>
                    </a>
                </Link>
            ))}
        </div>
    );

    return (
        <main>
            <Head>
                <title>Season Stats</title>
            </Head>
            <Nav></Nav>
            <div className="container mx-auto p-4 my-8">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div>
                        <h2 className="text-5xl font-bold text-center mb-4" style={{ color: "#595959" }}>WEST</h2>
                        {renderTeams(westTeams)}
                    </div>
                    <div style={{ backgroundColor: "#595959", width: "2px", height: "100%" }}></div>
                    <div>
                        <h2 className="text-5xl font-bold text-center mb-4" style={{ color: "#595959" }}>EAST</h2>
                        {renderTeams(eastTeams)}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default SeasonStats;