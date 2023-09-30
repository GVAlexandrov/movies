import { useState } from 'react';
import './LoginRegister.css';
import validate from '../../validations/authValidations';
import { activeUser, login, register } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        pass: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    let location = window.location.pathname.slice(1);


    const onLogin = (e) => {
        e.preventDefault();

        const emailTextError = validate.email(credentials.email);
        const passTextError = validate.password(credentials.pass);

        if (emailTextError || passTextError) {
            setError(emailTextError || passTextError);
            setTimeout(() => {
                setError('');
            }, 3000);

            return;
        }

        login(credentials.email, credentials.pass)
            .then(response => {
                activeUser(response.user.uid, response.user.email);
                return;
            })
            .then(() => navigate('/my-movies'))
            .catch(error => console.log(error));
    }

    const onRegister = (e) => {
        e.preventDefault();

        const repass = e.target.elements['re-password'].value;

        const emailTextError = validate.email(credentials.email);
        const passTextError = validate.password(credentials.pass);
        const repassTextError = validate.repassword(repass, credentials.pass);

        if (emailTextError || passTextError || repassTextError) {
            setError(emailTextError || passTextError || repassTextError);
            setTimeout(() => {
                setError('');
            }, 3000);

            return;
        }

        register(credentials.email, credentials.pass)
            .then(response => {
                activeUser(response?.user.uid, response?.user.email);
                return;
            })
            .then(() => navigate('/'))
            .catch(error => console.log(error));
    }



    return (
        <form id='form' onSubmit={location === 'register' ? onRegister : onLogin}>
            <p>{location === 'login' ? 'Login' : 'Register'}</p>

            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    placeholder="your-email@gmail.com"
                    onInput={(e) => setCredentials(oldState => ({ ...oldState, email: e.target.value }))}
                />
            </div>

            <div>
                <label htmlFor='password'>Password</label>

                <input type='password' id='password' placeholder="********" onInput={(e) => setCredentials(oldState => ({ ...oldState, pass: e.target.value }))} />
            </div>

            {location === 'register'
                ?
                <div>
                    <label htmlFor='re-password'>Repeat Pass</label>
                    <input
                        type='password'
                        id='re-password'
                        placeholder="********"
                    />
                </div>
                : ''
            }

            <button type='submit'>
                {location === 'register' ? 'Register' : 'Login'}
            </button>
        </form>
    )
}

export default LoginRegister;