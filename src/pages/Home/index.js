import React from 'react';
import './styles.scss';
import { MovieDescription, Navbar } from '../../components';

const Home = () => {
  return (
    <main className="Home">
      <Navbar />
      <MovieDescription />
    </main>
  );
};

export default Home;
