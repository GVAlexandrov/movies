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


    const sortMovies = (e) => {
        const sortByArr = e.target.value.split('-');
        let sortedMovies = [...movies];

        if (sortByArr[0] === 'year') {
            if (sortByArr[1] === 'newest') {
                sortedMovies = [...movies].sort((a, b) => {
                    return Number(b.Year) - Number(a.Year)
                });
            } else if (sortByArr[1] === 'oldest') {
                sortedMovies = [...movies].sort((a, b) => {
                    return Number(a.Year) - Number(b.Year)
                });
            }
        }

        setMovies(sortedMovies);
    }

    return (
        <>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchedMovie}
                    onChange={(e) => { setSearchedMovie(e.target.value) }}
                />
            </div>

            <div className='sort-menu'>
                <label htmlFor="sort">Sort by:</label>
                <select
                    id="sort"
                    name="sort"
                    onChange={sortMovies}
                >
                    <option selected value="-" >-</option>
                    <option value="year-newest">Year (Newest 1st)</option>
                    <option value="year-oldest">Year (Oldest 1st)</option>
                </select>
            </div >

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