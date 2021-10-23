import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { hot } from "react-hot-loader";
import "./App.scss";

// Components
import NavMain from "Components/navigation/NavMain";

// Routes
import Home from './routes/home/Home';
import Campaign from './routes/campaign/Campaign';

function App() {
  return (
    <Router>
      <NavMain />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/campaign">
          <Campaign></Campaign>
        </Route>
        <Route path="*">
          <div className="w-100 text-center">
            <div className="h1 py-5">404 Not Found</div>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default hot(module)(App);
