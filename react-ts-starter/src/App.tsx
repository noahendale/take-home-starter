import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UserInfo from './pages/UserInfo';
import Pokemon from './pages/Pokemon';
import Review from './pages/Review';
import { Typography } from '@mui/material';

function App() {

  return (
    <div className="App">
      <Typography variant='h2'>Choose Your Pokemon!</Typography>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserInfo />}></Route>
          <Route path="pokemon" element={<Pokemon/>}></Route>
          <Route path="review" element={<Review/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
