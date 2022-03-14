import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/CoinPage/:id" element={<CoinPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
