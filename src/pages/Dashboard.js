import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={handleClick}>
        Logout
      </button>

      <Link to='welcome'>
        Want a Greeting?
      </Link>

      <Routes>
        <Route path='welcome' element={<h2>Welcome!</h2>}/>
      </Routes>
    </div>
  );
};

export default Dashboard;
