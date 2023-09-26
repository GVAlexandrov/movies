import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import MyMovies from './Components/MyMovies/MyMovies';
import LoginRegister from './Components/LoginRegister/LoginRegister';
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

          <Route path='/login' element={<LoginRegister />} />
          <Route path='/register' element={<LoginRegister />} />
        </Routes>

      </main>

      <Footer />
    </div>
  );
}

export default App;
