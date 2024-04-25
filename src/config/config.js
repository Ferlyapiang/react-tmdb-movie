import { useState, useEffect } from 'react';

const useMovieData = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTdhMTJhNGY5OTA5MTkxM2QyOTA4MTgzY2E4MTVkMCIsInN1YiI6IjY2MjljNjhiZGUxMWU1MDA5OTcwYjNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6-gareVC6eyHOAwL9MexWjK9gvQjgN6aPaTiv9qe0rc',
            'Accept': 'application/json'
          }
        });
        const responseData = await response.json();
        setMovies(responseData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data only if movies array is empty
    if (movies.length === 0) {
      fetchData();
    }
  }, []);

  return movies;
};

export default useMovieData;
