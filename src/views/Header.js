import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import stockMovies from '../assets/stockMovies.png';

const Header = () => (
  <header id="cont-outer">
    <Nav id="fs-header" style={{ alignSelf: 'center', alignItems: 'center' }}>
      {' '}
      <NavLink className="text-white" href="/">
        <img width={200} src={stockMovies} alt="poster" />
      </NavLink>
      <NavLink className="text-white" style={{ marginLeft: 10 }} href="/anagram">
        Anagram
      </NavLink>
    </Nav>
  </header>
);

export default Header;
