import './MoviePage.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL, moveScreenToTop } from '../../utils/utils';

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    moveScreenToTop();

    const getMovie = async (id) => {
        try {
            const response = await fetch(`${API_URL}&i=${id}`);
            const result = await response.json();
            setMovie(result);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovie(id);
    }, []);


    return (
        <div className='div-movie-page'>
            <h2>{movie.Title}</h2>

            <div className='div-movie-page-div-content'>
                <img
                    alt={movie.Title}
                    src={movie.Poster}
                />
                <div className='div-movie-page-div-content-info'>
                    <p>Year: {movie.Year}</p>
                    <p>Genre: {movie.Genre}</p>
                    <p>Plot: {movie.Plot}</p>
                    <p>Director: {movie.Director}</p>
                    <p>Actors: {movie.Actors}</p>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;