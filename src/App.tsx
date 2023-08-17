import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
