import React from 'react';
import { Link } from 'react-router-dom';

const userId = 5;

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/users/${userId}`}>Usuario 5</Link>
      <div>
        <Link to={`/dashboard`}>Dashboard</Link>
      </div>
    </div>
  );
};

export default HomePage;
