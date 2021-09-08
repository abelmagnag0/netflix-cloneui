import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './services/Tmdb';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header';

export default () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegando o Featured
      let originals = list.filter(item => item.slug === 'originals')
      let randomIndex = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomIndex]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)  
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      <Header />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {
          movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))
        }
      </section>
    </div>
  );
}