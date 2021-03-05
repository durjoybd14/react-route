import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {

  return (
    <div>
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          {/* : use for dynamic routes :friendId should be match with friendDetails object desructuring*/}

          <Route path="/friend/:friendId">  
            <FriendDetails />    
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
