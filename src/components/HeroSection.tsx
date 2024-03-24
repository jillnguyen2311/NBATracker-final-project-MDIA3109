import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="bg-cyan-950 text-orange-50 py-20 flex flex-col md:flex-row items-center justify-center text-center">
      <div className="container mx-auto md:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4 px-4 sm:px-6 md:px-10 text-center">Welcome to OddBall</h1>
        <p className="text-lg mb-6">Your destination for sport game odds insights</p>
        <p className="text-md mx-6 px-5 md:mx-8 text-center md:text-center ">A live NBA sports tracking website that tracks the game scores and other details while simultaneously tracking the game's betting odds during live games. Search for your team, find their live scores, stats, and when and where they are playing.</p>
        <button className="px-8 py-3 mt-10 bg-emerald-500 text-white font-semibold rounded-md hover:bg-orange-400 items-center justify-center">Get Started</button>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <Spline scene="https://prod.spline.design/Jfl07f7b7WWOsD-6/scene.splinecode" />
      </div>
    </section>
  );
}