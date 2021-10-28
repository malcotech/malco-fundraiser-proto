import React from "react";
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './NavMain.scss';

export default function NavMain() {
  const cookieName = 'malco_login_status';
  const [ cookies ] = useCookies([cookieName]);
  const isLoggedIn = cookies.hasOwnProperty(cookieName) && cookies[cookieName] === 'logged_in';

  const accountCTA = (isLoggedIn)
    ? <div className="col-auto ms-auto">
        <Link to="/account" className="btn btn-sm btn-dark">Account</Link>
      </div>
    : <div className="col-sm-auto ms-sm-auto my-2 my-sm-0">
        {/* TODO: conditional button check if logged in, then go to either login or accounts page. */}
        <span className="btn btn-outline-primary btn-sm opacity-50 me-3 pe-none" title="Intentionally Disabled">Create Account</span>
        {/* TODO: conditional button check if logged in, then go to either login or accounts page. */}
        <Link to="/sign-in" className="btn btn-sm btn-dark">Sign In</Link>
      </div>;

  return (
    <nav className="p-2 bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <Link to="/" className="logo">Malco's Fund</Link>
          </div>
          <div className="col-auto">
            <Link to="/campaigns">Campaigns</Link>
          </div>
          {accountCTA}
        </div>
      </div>
    </nav>
  );
}
