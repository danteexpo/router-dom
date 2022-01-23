import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';

const App = () => {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/users' element={<UsersPage/>} />
            <Route path='/usuarios' element={<Navigate to="/users"/>} />
            <Route path='/users/:id' element={<UserPage/>} />
            <Route path='/dashboard/*' element={<Dashboard/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
