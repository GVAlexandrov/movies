import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';
import { useEffect } from 'react';
import { useState } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=b02986ff';

const Movies = () => {
    let [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const result = await response.json();
        setMovies(result.Search);
    }

    movies.forEach(movieObj => {
        console.log(movieObj);
    });

    useEffect(() => {
        searchMovies('batman');
    }, []);

    return (
        <div className='MoviesWrapper'>
            {
                movies?.map((movieObj) => {
                    return <MovieCard movieObj={movieObj} />
                })
            }
        </div>
    )
}

export default Movies;