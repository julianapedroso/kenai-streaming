import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
// Components
import { MoviePage, ProfilePage } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" exact element={<ProfilePage />} />
      </Router>
      <Router>
        <Route path="/:id" exact element={<MoviePage />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
