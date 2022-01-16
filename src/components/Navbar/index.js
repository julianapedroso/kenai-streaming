import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav className="menu">
        <h1 className="menu__logo">Kenai</h1>
        <ul>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
                stroke="#F9F9F9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.25 26.25L20.8125 20.8125"
                stroke="#F9F9F9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li>
            <a className="nav__item" href="/">Início</a>
          </li>
          <li>
            <a className="nav__item" href="/">Minha lista</a>
          </li>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 10C22.5 8.01088 21.7098 6.10322 20.3033 4.6967C18.8968 3.29018 16.9891 2.5 15 2.5C13.0109 2.5 11.1032 3.29018 9.6967 4.6967C8.29018 6.10322 7.5 8.01088 7.5 10C7.5 18.75 3.75 21.25 3.75 21.25H26.25C26.25 21.25 22.5 18.75 22.5 10Z"
                stroke="#F9F9F9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.1625 26.25C16.9428 26.6288 16.6273 26.9433 16.2478 27.1619C15.8683 27.3805 15.438 27.4956 15 27.4956C14.562 27.4956 14.1318 27.3805 13.7522 27.1619C13.3727 26.9433 13.0573 26.6288 12.8375 26.25"
                stroke="#F9F9F9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li>
            <Link to={'/:id'}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25"
                  stroke="#F9F9F9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z"
                  stroke="#F9F9F9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
