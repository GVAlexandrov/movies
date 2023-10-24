import './MoviePage.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../utils/utils';
import { addFavouriteMovie } from '../../services/services';

const MoviePage = ({ userEmail }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [rate, setRate] = useState(0);
    const [liked, setLiked] = useState(false);

    const getMovie = async (id) => {
        try {
            const response = await fetch(`${API_URL}&i=${id}`);
            const result = await response.json();
            setMovie(result);
        } catch (error) {
            console.log(error)
        }
    }

    const rateMovie = function (e) {
        e.preventDefault();

        if (e.target.className === 'star-div' || e.target.className === 'star-div star-div-selected') {
            setRate(Number(e.target.id));
        }
    }

    const likeMovie = function (e) {
        e.preventDefault();

        if (userEmail) {
            addFavouriteMovie(id)
                .then(response => {
                    console.log(response);
                })
                .catch(console.log)

            if (e.target.className === 'far fa-heart' || e.target.className === 'far fa-heart liked') {
                setLiked(!liked);
            }
        }
    }

    useEffect(() => {
        getMovie(id);
    }, []);


    return (
        <div className='div-movie-page'>
            <h2>{movie.Title}</h2>

            <div className="stars" onClick={rateMovie}>
                <h3>Rate</h3>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    .map((value) => (
                        value <= rate
                            ? <div id={value} className='star-div star-div-selected' key={value}>★</div>
                            : <div id={value} className='star-div' key={value}>★</div>
                    ))}
                <div>{rate} / 10</div>
            </div>

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
            <div className="like-button">
                <h3>Like</h3>

                <span
                    id={id}
                    className="heart"
                    onClick={likeMovie}
                >
                    <i className={
                        liked
                            ? "far fa-heart liked"
                            : "far fa-heart"
                    }></i>
                </span>
            </div>
        </div>
    )
}

export default MoviePage;