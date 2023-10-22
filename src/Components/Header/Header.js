import './Header.css';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ userEmail, setUserEmail }) => {
    return (
        <>
            <NavLink to={'/home'}>
                <header className='header'>MOVIES<strong>APP</strong>, Hello, {
                    userEmail !== null
                        ? localStorage.getItem('email')
                        : 'Guest'
                }
                </header>
            </NavLink>

            <Navigation
                userEmail={userEmail}
                setUserEmail={setUserEmail}
            />
        </>
    )
}

export default Header;