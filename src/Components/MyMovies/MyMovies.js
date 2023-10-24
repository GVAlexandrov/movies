import './MyMovies.css';
import { getAllFavouriteMovies } from '../../services/services';
import { useEffect, useState } from 'react';


const MyMovies = () => {
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllFavouriteMovies('movies')
            .then(res => {
                setMovies(res);
            })
    }, []);

    console.log(movies);

    return (
        <>
            <h1>MY MOVIES</h1>
        </>
    )
}

export default MyMovies;