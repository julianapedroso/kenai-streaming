import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
// Components
import { Home, Profile } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" exact element={<Home />} />
      </Router>
      <Router>
        <Route path="/:id" exact element={<Profile />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
