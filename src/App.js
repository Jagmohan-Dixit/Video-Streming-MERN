import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Player from './components/Player';
import Error from './pages/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/player' element={<Player />} />
      <Route exact path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
