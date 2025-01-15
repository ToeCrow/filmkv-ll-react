import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">START</Link></li>
        <li><Link to="/200best">200 BÄSTA</Link></li>
        <li><Link to="/favorites">FAVORITER</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;