import "./estilos/Home.css";
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Juego from './components/Juego';
import Desarrolladores from './components/Desarrolladores';


function Game() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/juego' element={<Juego/>}/>
        <Route path='/desarrolladores' element={<Desarrolladores/>}/>
      </Routes>
    </Router>
    <footer>Pie de Pagina</footer>
    </>
  );
}

export default Game;
