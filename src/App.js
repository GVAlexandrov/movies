import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import MyMovies from './Components/MyMovies/MyMovies';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main>

        <Routes>
          <Route path='/' element={<Home />} />
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
