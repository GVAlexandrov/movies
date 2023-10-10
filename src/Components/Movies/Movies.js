import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { API_URL } from '../../utils/utils';

const Movies = () => {
    let [movies, setMovies] = useState([]);
    let [searchedMovie, setSearchedMovie] = useState('Star Wars');

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const result = await response.json();
            setMovies(result.Search);
        } catch (error) {
            console.log(error)
        }
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
                        return <MovieCard key={movieObj.imdbID} movieObj={movieObj} />
                    })
                }
            </div>
        </>
    )
}

export default Movies;