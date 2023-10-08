import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';
import { useEffect } from 'react';
import { useState } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=b02986ff';

const Movies = () => {
    let [movies, setMovies] = useState([]);
    let [searchedMovie, setSearchedMovie] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const result = await response.json();
        setMovies(result.Search);
    }

    useEffect(() => {
        searchMovies(searchedMovie);
    }, [searchedMovie]);

    console.log(searchedMovie);

    return (
        <>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchedMovie}
                    onChange={(e) => { setSearchedMovie(e.target.value) }}
                />
            </div>
            <div className='MoviesWrapper'>
                {
                    movies?.map((movieObj) => {
                        return <MovieCard movieObj={movieObj} />
                    })
                }
            </div>
        </>
    )
}

export default Movies;