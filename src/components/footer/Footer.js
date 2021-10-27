import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black-800 text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md mb-4 mb-md-0 text-center text-md-start">
            <h3>Malco's Fund</h3>
            <span>&copy; 2021 Malco's Fund, LLC</span>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mt-3 mb-4 mt-md-0 mb-md-0 text-center text-md-end">
            <p className="h6">Information</p>
            <div className="lh-lg">
              <a className="c-pointer d-block text-link">About Us</a>
              <a className="c-pointer d-block text-link">Contact</a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mt-3 mb-4 mt-md-0 mb-md-0 text-center text-md-end">
            <p className="h6">Bacon ipsum</p>
            <div className="lh-lg">
              <a className="c-pointer d-block text-link">Dolor Amet Pork</a>
              <a className="c-pointer d-block text-link">Loin Swine</a>
              <a className="c-pointer d-block text-link">Salami</a>
              <a className="c-pointer d-block text-link">Frankfurter</a>
              <a className="c-pointer d-block text-link">Turkey Porchetta</a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mt-3 mb-4 mt-md-0 mb-md-0 text-center text-md-end">
            <p className="h6">Filet mignon</p>
            <div className="lh-lg">
              <a className="c-pointer d-block text-link">strip steak</a>
              <a className="c-pointer d-block text-link">alcatra</a>
              <a className="c-pointer d-block text-link">jerky beef</a>
              <a className="c-pointer d-block text-link">pork belly</a>
              <a className="c-pointer d-block text-link">pastrami</a>
              <a className="c-pointer d-block text-link">short ribs</a>
            </div>
          </div>
        </div>
      <hr className="mt-4 mb-3" />
      <div className="text-center text-md-start" title="Just Place Holder">
        <span className="c-pointer me-3">Terms</span>
        |
        <span className="c-pointer mx-3">Privacy</span>
        |
        <span className="c-pointer mx-3">Legal</span>
      </div>
      </div>
    </footer>
  );
}
