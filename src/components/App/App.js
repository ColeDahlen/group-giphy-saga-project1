import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

function App(props) {
  return (
    <div>
      <Router>
        <nav>
        <h1>Giphy Search!</h1>
          <div>
            <Link to="/">Search</Link>
          </div>
          <div>
            <Link to="/favorites">Favorites</Link>
          </div>
        </nav>
        <Route exact path="/">
            <Search />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
