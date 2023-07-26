import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UserInfo from './pages/UserInfo';
import Pokemon from './pages/Pokemon';
import Review from './pages/Review';

function App() {
  return (
    <div className="App">
      {/* UserInfo page */}
      {/* pokemon page */}
      {/* review page */}
      {/* submission result */}
      {/* implement routing and saving */}
      <BrowserRouter>
        <Routes>
          <Route path="userinfo" element={<UserInfo/>}></Route>
          <Route path="pokemon" element={<Pokemon/>}></Route>
          <Route path="review" element={<Review/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
