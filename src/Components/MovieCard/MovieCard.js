import './MovieCard.css';
import { NavLink } from 'react-router-dom';

const MovieCard = (movieObj) => {

    return (
        <div className='div-movie-card'>
            <NavLink to={`/my-movies/movie/${movieObj.movieObj.imdbID}`}>
                <img
                    alt={movieObj?.movieObj.Title}
                    src={movieObj?.movieObj.Poster}
                />
            </NavLink>
        </div>
    )
}

export default MovieCard;