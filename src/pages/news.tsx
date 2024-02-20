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
        console.log(response.data); // Log response data for debugging
        setNews(response.data.map((item: any) => ({ title: item.title, url: item.url, source: item.source })));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews();
  }, []);

  return (
    <main style={{ fontFamily: 'Almarai, sans-serif' }}>
      <Head>
        <title>Latest News</title>
      </Head>
      <Nav />
      <h1 className="text-black text-center font-bold text-4xl py-10">Latest News</h1>
      <div>
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index}>
              <h2>{article.title}</h2>
              <p>Source: {article.source}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </main>
  );
}
