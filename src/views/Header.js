import React from 'react';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import stockMovies from '../assets/stockMovies.png';

const Header = () => (
  <header id="cont-outer">
    <Nav id="fs-header" style={{ alignSelf: 'center', alignItems: 'center' }}>
      {' '}
      <NavLink exact className="text-white" to="/">
        <img width={200} src={stockMovies} alt="poster" />
      </NavLink>
      <NavLink className="text-white" style={{ marginLeft: 10 }} to="/anagram">
        Anagram
      </NavLink>
    </Nav>
  </header>
);

export default Header;
