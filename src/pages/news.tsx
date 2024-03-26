import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Head from 'next/head';
import Footer from '../components/Footer';

interface Article {
  title: string;
  url: string;
  image: string;
}

export default function News() {
  const [news, setNews] = useState<Article[]>([]);
  const apiUrl = 'https://tank01-fantasy-stats.p.rapidapi.com/getNBANews';
  const rapidApiKey = '708227765cmshd45426b5899e082p15bca7jsn871aa32efb19';

  useEffect(() => {
    async function fetchNews() {
      try {
        const options = {
          method: 'GET',
          url: apiUrl,
          params: {
            recentNews: 'true',
            maxItems: '20'
          },
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        console.log(response.data);

        const articlesArray = response.data.body;

        if (Array.isArray(articlesArray)) {
          const mappedNews: Article[] = articlesArray.map((item: any) => ({
            title: item.title,
            url: item.link,
            image: item.image
          }));
          setNews(mappedNews);
        } else {
          console.error('Response body is not an array:', articlesArray);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews();
  }, []);

  return (
    <main style={{ fontFamily: "Almarai, sans-serif" }}>
      <Head>
        <title>Latest News</title>
      </Head>
      <Nav />
      <h1 className="text-black text-center font-bold text-4xl py-10 mb-10">Latest News</h1>
      <div className="mx-auto max-w-7xl mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="flex flex-wrap border-4 border-green-500 bg-white rounded-lg shadow-md flex p-4 min-w-0 md:min-w-[450px]">
              <div className="w-2/5">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full rounded-l-lg md:w-auto" />
              </div>
              <div className="w-3/5 p-6">
                <h2 className="text-xl font-semibold text-center md:text-left">{article.title.slice(0, 50)}</h2>
                <p className="mt-4 text-gray-800">{article.title.slice(0, 300)}...</p>
                <div className="mt-4 text-center md:text-left">
                  <a href={article.url} className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Read more ➜</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No news available</p>
        )}
      </div>
      <Footer />
    </main>
  );
}
