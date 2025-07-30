import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';

function Header() {
  const { user } = useContext(UserContext);

  return (
    <header style={{ padding: '10px', backgroundColor: '#4C8BF5', color: 'white' }}>
      <h1>Welcome, {user.name}!</h1>
      <p>Your score is {user.score}</p>
    </header>
  );
}

export default Header;
