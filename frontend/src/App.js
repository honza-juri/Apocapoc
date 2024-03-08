import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//MainPage
import MainPage from './pages/MainPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;