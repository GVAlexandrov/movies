import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import MyMovies from './Components/Movies copy/MyMovies';

function App() {
  return (
    <div className="App">
      <Header />

      <main>

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/my-movies' element={<MyMovies />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </main>

      <Footer />
    </div>
  );
}

export default App;
