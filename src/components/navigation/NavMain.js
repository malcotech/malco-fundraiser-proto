import React from "react";
import { Link } from 'react-router-dom';
import './NavMain.scss';

export default function NavMain() {
  return (
    <nav className="p-2 bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <Link to="/" className="logo">Malco Funding</Link>
          </div>
          <div className="col-auto">
            <Link to="/campaigns">Campaigns</Link>
          </div>
          <div className="col-auto ms-auto" title="Intentionally Disabled">
            {/* TODO: conditional button check if logged in, then go to either login or accounts page. */}
            <Link to="/sign-in" className="btn btn-outline-primary btn-sm opacity-50 pe-none">Create Account</Link>
          </div>
          <div className="col-auto">
            {/* TODO: conditional button check if logged in, then go to either login or accounts page. */}
            <Link to="/sign-in" className="btn btn-sm btn-dark">Sign In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
