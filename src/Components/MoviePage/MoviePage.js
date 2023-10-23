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
            console.log(result)
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

                <div className="like-button">
                    <h3>Like</h3>

                    <span id={id} className="heart">
                        <i className="far fa-heart"></i>
                    </span>
                </div>


                <div className="stars">
                    <h3>Rate</h3>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <div className='star-div' key={value}>★</div>
                    ))}
                    <div>10 / 10</div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;