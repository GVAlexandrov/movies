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

    const togleMenu = (e) => {
        const element = e.target.className === 'hamburger-navigation'
            ? e.target
            : e.target.parentElement;
        console.log(element.nextElementSibling.style.display);
        (element.nextElementSibling.style.display && element.nextElementSibling.style.display === 'flex')
            ? element.nextElementSibling.style.display = 'none'
            : element.nextElementSibling.style.display = 'flex';
    }


    return (
        <nav onClick={moveScreenToTop}>

            <div className='hamburger-navigation' onClick={togleMenu}>
                <div className='hamburger-navigation-top'></div>
                <div className='hamburger-navigation-middle'></div>
                <div className='hamburger-navigation-bottom'></div>
            </div>

            <ul>
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/movies'}>Movies</NavLink></li>

                {userEmail !== null
                    ? (<>
                        <li><NavLink to={'/my-movies'}>My movies</NavLink></li>
                        <li><NavLink onClick={logoutHandler} to={'/'}>Logout</NavLink></li>
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