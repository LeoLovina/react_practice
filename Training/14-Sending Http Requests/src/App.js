import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(() => {
    console.log("fetchMoviesHandler");
    setIsLoading(true);
    fetch("https://swapi.dev/api/films")
      .then(response => {
        if (!response.ok) {
          console.log(response);
          throw new Error("Error: " + response.status)
        }
        else {
          return response.json();
        }
      })
      .then(data => {
        const transformedMovies = data.results.map((m) => {
          return {
            id: m.episode_id,
            title: m.title,
            openingText: m.opening_crawl,
            releaseDate: m.release_date
          }
        });
        setMovies(transformedMovies);
      })
      .catch((reason) => {
        console.log(reason);
        setError(reason.message);
      })
      .finally((fin) => {
        console.log("fetch done")
        setIsLoading(false)
      }
      );
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
