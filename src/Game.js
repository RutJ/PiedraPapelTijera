import "./Game.css";
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Juego from './components/Juego';
import Desarrolladores from './components/Desarrolladores';
import Nav from 'react-bootstrap/Nav';


function Game() {
  return (
    <div className='game'>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/juego' element={<Juego/>}/>
      <Route path='/desarrolladores' element={<Desarrolladores/>}/>
    </Routes>
  </Router>
    <footer>Pie de Pagina</footer>
    </div>
    
  );
}

export default Game;
