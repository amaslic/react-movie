import React, { useEffect, useState } from 'react';

import Movies from './components/Movies';

const api_key = "bdf0f907bb713c41c8b7db8bbae0e3a1";
const movie_API = "https://api.themoviedb.org/3/";
const movies_api = "https://api.themoviedb.org/3/discover/movie?api_key="+api_key+"&page=1";
const searh_api = "https://api.themoviedb.org/3/search/movie?&api_key="+api_key;
const popular_api = "https://api.themoviedb.org/3/movie/popular?api_key="+api_key+"&page=1";

function App() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
	  fetch(movie_API+"movie/popular?api_key="+api_key+"&page=1").then((res) => res.json()).then((data) => setMovies(data.results) );
  }, [])

  return (

	  <section className="items">

			{movies.map((movie, i) => (
				<Movies key={i} data={movie} />
			))}
	    </section>
  );
}

export default App;
