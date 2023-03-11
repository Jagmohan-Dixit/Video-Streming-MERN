import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Player from './components/Player';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/player' element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
