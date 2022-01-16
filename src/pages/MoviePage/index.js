import React from 'react';
import {
  PopularSection,
  MovieDescription,
  Navbar,
  Footer,
} from '../../components';

const MoviePage = () => {
  return (
    <main className="MoviePage">
      <Navbar />
      <MovieDescription />
      <PopularSection />
      <Footer />
    </main>
  );
};

export default MoviePage;
