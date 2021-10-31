import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { hot } from "react-hot-loader";
import { useCookies } from 'react-cookie';
import "./App.scss";

// Helpers
import { basename } from 'Helpers';

// Components
import NavMain from "Components/navigation/NavMain";

// Routes
import Account from 'Routes/account/Account';
import Home from 'Routes/home/Home';
import Campaigns from 'Routes/campaigns/Campaigns';
import Fund from 'Routes/campaigns/Fund';
import SignIn from "Routes/account/SignIn";

function App() {
  return (
    <Router basename={basename}>
      <NavMain />
      <Switch>
        {/* Account */}
        <Route exact path="/account" component={checkAccount} />
        {/* Funds */}
        <Route exact path="/campaigns/fund/:id" component={Fund} />
        <Redirect from="/campaigns/fund" to="/campaigns" />
        {/* Campaigns */}
        <Redirect from="/campaigns" to="/campaigns/fund/001" />
        {/* TODO: Campaigns in Progress */}
        {/* <Route exact path="/campaigns" component={Campaigns} /> */}
        {/* Sign In */}
        <Route exact path="/sign-in" component={checkSignIn} />
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

function isLoggedIn() {
  const cookieName = 'malco_login_status';
  const cookies = useCookies([cookieName]);

  return cookies[0].hasOwnProperty(cookieName) && cookies[0][cookieName] === 'logged_in';
}

function checkAccount() {
  if (isLoggedIn()) {
    return <Account />
  } else {
    return <Redirect to="/sign-in" />
  }
}

function checkSignIn() {
  if (isLoggedIn()) {
    return <Redirect to="/account" />
  } else {
    return <SignIn />
  }
}

export default hot(module)(App);
