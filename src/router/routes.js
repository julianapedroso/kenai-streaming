import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
// Components
import { MoviePage, ProfilePage, MyList } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" exact element={<ProfilePage />} />
      </Router>
      <Router>
        <Route path="/moviepage" exact element={<MoviePage />} />
      </Router>
      <Router>
        <Route path="/mylist" exact element={<MyList />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
