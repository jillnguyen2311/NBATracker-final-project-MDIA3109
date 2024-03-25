import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import PricingCard from '../components/PricingCard';
import SubBanner from '../components/SubBanner';
import NewsletterSection from '../components/NewsletterSection';
import Nav from '../components/Nav'
import Footer from '../components/Footer';

export default function PremiumPage() {
  return (
    <main>
      <Head>
        <title>OddBall Landing Page</title>
      </Head>

      <Nav />
      <HeroSection />

      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-center">
        <PricingCard
          type="Basic"
          price="$9.99/month"
          features={[
            "> Access to live game odds for major sports leagues.",
            "> Real-time updates on team statistics and player performance.",
            "> Limited access to premium features and insights.",
            "> Monthly newsletter with industry news and betting tips."
          ]}
          splineScene="https://prod.spline.design/IHc1uMe7VBOrf4wZ/scene.splinecode"
        />
        <PricingCard
          type="Standard"
          price="$19.99/month"
          features={[
            "> Full access to live game odds for all sports leagues worldwide.",
            "> Advanced analytics tools for in-depth game analysis.",
            "> Exclusive insights into betting trends and market predictions.",
            "> 24/7 customer support for any inquiries or assistance."
          ]}
          splineScene="https://prod.spline.design/K7-Jq7TsvvGdHNJk/scene.splinecode"
        />
        <PricingCard
          type="Premium"
          price="$29.99/month"
          features={[
            "> VIP access to expert betting strategies and tips.",
            "> Customizable alerts for game events and betting opportunities.",
            "> Personalized dashboard with tailored recommendations.",
            "> Priority customer support with dedicated account manager."
          ]}
          splineScene="https://prod.spline.design/9YgA-in5C8QtAi-5/scene.splinecode"
        />
      </div>

      <SubBanner />
      <NewsletterSection />
      <Footer />
    </main>
  );
}