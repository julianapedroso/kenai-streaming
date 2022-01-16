import React from 'react';
import './styles.scss';
import {
  PopularSection,
  MovieDescription,
  Navbar,
  Footer,
} from '../../components';

const Home = () => {
  return (
    <main className="Home">
      <Navbar />
      <MovieDescription />
      <PopularSection />
      <Footer />
    </main>
  );
};

export default Home;
