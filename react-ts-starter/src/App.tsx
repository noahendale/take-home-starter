import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UserInfo from './pages/UserInfo';
import Pokemon from './pages/Pokemon';
import Review from './pages/Review';

function App() {

  return (
    <div className="App">
      <h1>Choose Your Pokemon!</h1>
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
