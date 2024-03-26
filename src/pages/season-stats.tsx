import Link from 'next/link';
import Nav from '../components/Nav';
import Head from 'next/head';
import Footer from '../components/Footer';

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
    const resTeams = await fetch('https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=08e042cd58c742ba8717fea9c6af6c40');
    const teams = await resTeams.json();

    const resStats = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/${season}?key=08e042cd58c742ba8717fea9c6af6c40`);
    const teamStats = await resStats.json();
    const limitedTeams = teams.slice(0, 30);

    const teamsWithStats: Team[] = limitedTeams.map((team: { TeamID: any; Conference: any; }) => {
        const stats = teamStats.find((stat: { TeamID: any; }) => stat.TeamID === team.TeamID);
        return {
            ...team,
            Conference: team.Conference,
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

    const westTeams = teamsWithStats.filter(team => team.Conference === 'Western')
        .sort((a, b) => b.Wins - a.Wins);
    const eastTeams = teamsWithStats.filter(team => team.Conference === 'Eastern')
        .sort((a, b) => b.Wins - a.Wins);

    const renderTeams = (teams: Team[], conference: 'Western' | 'Eastern') => (
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-16">
            {teams.map((team) => (
                <Link href={`/team/${team.Key}`} key={team.TeamID} passHref>
                    <div className="block hover:shadow-lg" style={{
                        backgroundColor: "#fff",
                        border: `4px solid ${conference === 'Eastern' ? '#FC9F5B' : '#00A375'}`,
                        borderRadius: "20px",
                        boxShadow: "0 7px 8px rgba(0, 0, 0, 0.3)",
                        width: "350px",
                        height: "250px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "20px",
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '6px'
                        }}>
                            <h2 className="text-lg font-semibold text-center mb-4">{team.City}</h2>
                            <h2 className="text-lg font-semibold text-center mb-4">{team.Name}</h2>
                        </div>
                        <div className="flex flex-row items-center justify-start" style={{ width: "100%" }}>
                            <img src={team.WikipediaLogoUrl} alt={team.Name} style={{ width: "120px", marginRight: "40px" }} />
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
                                <p className="text-sm">Wins: {team.Wins}</p>
                                <p className="text-sm">Losses: {team.Losses}</p>
                                <p className="text-sm">Top Player: TBD</p>
                            </div>
                        </div>
                        <p className="text-xs text-center" style={{ marginTop: "auto", color: "#595959", width: "100%" }}>
                            Click for more detailed stats
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );

    return (
        <main>
            <Head>
                <title>Season Stats</title>
            </Head>
            <Nav />
            <h1 className="text-black text-center font-bold text-4xl py-10 mb-10">Season Stats</h1>
            <div className="container mx-auto p-4 my-12">
                <div className="flex flex-col md:flex-row justify-center items-center gap-20">
                    <div className="w-full md:w-auto xl:w-auto">
                        <h2 className="text-5xl font-bold text-center mb-10" style={{ color: "#595959" }}>WEST</h2>
                        {renderTeams(westTeams
                            , 'Western')}
                    </div>
                    <div className="w-full md:w-auto xl:w-auto">
                        <h2 className="text-5xl font-bold text-center mb-10" style={{ color: "#595959" }}>EAST</h2>
                        {renderTeams(eastTeams, 'Eastern')}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default SeasonStats;
