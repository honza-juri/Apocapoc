import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//MainPage
import MainPage from './pages/MainPage.js';
import LoginPage from './pages/LoginPage.js';
import RegistrationPage from './pages/RegistrationPage.js';
import ProfilePage from './pages/ProfilePage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/registration' element={<RegistrationPage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;