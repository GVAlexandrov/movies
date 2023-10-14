import './Navigation.css';
import { logout } from '../../services/authService';
import { NavLink, useNavigate } from 'react-router-dom';
import { moveScreenToTop } from '../../utils/utils';

const Navigation = ({ userEmail, setUserEmail }) => {
    const navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        logout()();
        setUserEmail(null);
        localStorage.removeItem('uid');
        localStorage.removeItem('email');
        navigate('/home')
    }


    return (
        <nav onClick={moveScreenToTop}>
            <ul>
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/movies'}>Movies</NavLink></li>

                {userEmail !== null
                    ? (<>
                        <li><NavLink to={'/my-movies'}>My movies</NavLink></li>
                        <li><NavLink onClick={logoutHandler} to={'/home'}>Logout</NavLink></li>
                    </>)
                    : (<>
                        <li><NavLink to={'/register'}>Register</NavLink></li>
                        <li><NavLink to={'/login'}>Login</NavLink></li>
                    </>)}
            </ul>
        </nav>
    )
}

export default Navigation;