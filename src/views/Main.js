import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDashboard from './movies/MovieDashboard';
import MovieDetails from './movies/MovieDetails';
import Anagram from './anagram/Anagram';

const Main = () => (
  <main id="cont-outer">
    <Switch>
      <Route exact path="/" name="Movie Dashboard" component={MovieDashboard} />
      <Route exact path="/movies/:name" name="Movie Details" component={MovieDetails} />
      <Route exact path="/anagram" name="Anagram" component={Anagram} />
    </Switch>
  </main>
);

export default Main;
