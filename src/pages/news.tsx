import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Head from 'next/head';

interface Article {
  title: string;
  url: string;
  source: string;
}

export default function News() {
  const [news, setNews] = useState<Article[]>([]);
  const apiUrl = 'https://nba-latest-news.p.rapidapi.com/articles';
  const rapidApiKey = '708227765cmshd45426b5899e082p15bca7jsn871aa32efb19';

  useEffect(() => {
    async function fetchNews() {
      try {
        const options = {
          method: 'GET',
          url: apiUrl,
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        console.log(response.data);
        setNews(response.data.map((item: any) => ({ title: item.title, url: item.url, source: item.source })));
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
      <h1 className="text-black text-center font-bold text-4xl py-10">Latest News</h1>
      <div className="mx-24 mb-8">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="border-4 border-green-500 rounded-lg shadow-md p-7 mb-8">
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="text-gray-600 mt-3">Source: {article.source}</p>
              <div className="mt-8">
                <a href={article.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read more ➜</a> {/* Added mt-4 for top margin */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No news available</p>
        )}
      </div>
    </main>
  );
}
