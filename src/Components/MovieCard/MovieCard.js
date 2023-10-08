import './MovieCard.css';

const MovieCard = (movieObj) => {
    console.log(movieObj.movieObj.Title);

    return (
        <div className='div-movie-card'>
            {/* <h4>{movieObj?.movieObj.Title}</h4> */}
            <img
                alt={movieObj?.movieObj.Title}
                src={movieObj?.movieObj.Poster}
            />
        </div>
    )
}

export default MovieCard;