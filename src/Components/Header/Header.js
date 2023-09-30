import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = ({ userEmail, setUserEmail }) => {
    return (
        <>
            <header className='header'>MOVIES APP, Hello, {
                userEmail !== null
                    ? localStorage.getItem('email')
                    : 'Guest'
            }
            </header>

            <Navigation
                userEmail={userEmail}
                setUserEmail={setUserEmail}
            />
        </>
    )
}

export default Header;