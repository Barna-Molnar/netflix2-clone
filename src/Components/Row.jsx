import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from '../axios';
import './Row.scss';
import movieTrailer from 'movie-trailer';

const base_url = 'http://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  // movies array
  const [movies, setMovies] = useState([]);
  // getting trailerUrl
  const [trailerUrl, setTrailerUrl] = useState('');

  // a snippet of code wich run  based on specific conditions
  useEffect(() => {
    //if [] =>  leave blank, run once  when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // options for react youtube video player based on the documentation
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  //
  const handleClick = (movie) => {
    // console.log(movie, 'ez meg az url', trailerUrl);
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      console.log(movie.name || movie?.title || '');
      movieTrailer(movie?.name || movie?.title || { tmdbId: movie.id } || '')
        .then((url) => {
          console.log(url);
          console.log(new URL(url));
          console.log(new URL(url).search);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get('v'));
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
