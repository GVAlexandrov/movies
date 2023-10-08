import './MovieCard.css';

const MovieCard = (movieObj) => {

    return (
        <div className='div-movie-card'>
            <img
                alt={movieObj?.movieObj.Title}
                src={movieObj?.movieObj.Poster}
            />
        </div>
    )
}

export default MovieCard;