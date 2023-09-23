import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/movies'}>Movies</NavLink></li>

                <li><NavLink to={'/register'}>Register</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>

                <li><NavLink to={'/my-movies'}>My movies</NavLink></li>
                <li><NavLink to={'/'}>Logout</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;