import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';

const Movies = () => {


    return (
        <div className='MoviesWrapper'>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    )
}

export default Movies;