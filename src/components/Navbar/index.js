import React from 'react';
import './styles.scss';
// Assets
import ISearch from '../../assets/icons/search.svg';
import IBell from '../../assets/icons/bell.svg';
import IUser from '../../assets/icons/user.svg';

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav className="menu">
      <h1 className="menu__logo">Kenai</h1>
        <ul>
          <li>
            <img src={ISearch} alt="Search icon" />
          </li>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Minha lista</a>
          </li>
          <li>
            <img src={IBell} alt="Bell icon" />
          </li>
          <li>
            <img src={IUser} alt="User icon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
