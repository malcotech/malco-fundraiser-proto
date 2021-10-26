import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { hot } from "react-hot-loader";
import "./App.scss";

// Components
import NavMain from "Components/navigation/NavMain";

// Routes
import Home from './routes/home/Home';
import Campaigns from './routes/campaigns/Campaigns';
import Fund from 'Routes/campaigns/Fund';

function App() {
  return (
    <Router>
      <NavMain />
      <Switch>
        {/* Funds */}
        <Route exact path="/campaigns/fund/:id" component={Fund} />
        <Redirect from="/campaigns/fund" to="/campaigns" />
        {/* Campaigns */}
        <Route exact path="/campaigns" component={Campaigns} />
        {/* Main - Home Page */}
        <Route exact path="/" component={Home} />
        {/* 404 */}
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
