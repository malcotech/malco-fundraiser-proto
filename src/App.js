import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";

import Donate from "./components/Donate";

// TODO: What is a cool name??
const venue = 'The Mocha Cup';


const progress = {
  bar: {
    borderRadius: "10px",
    height: "20px"
  },
  track: {
    width: "50%"
  }
}


function App() {
  const numbers = [1, 2, 3, 4];

  // Sample Loop
  const sample_loop = numbers.map((number) =>
    <span key={`samp-${number}`}>Content #: {number}</span>
  );

  return (
    <main className="sticky">
      {/* Banner Component */}
      <section id="main-hero" className="bg-gray-800">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-12 col-lg-6 px-0 px-sm-2">
              {/* Source: https://i.picsum.photos/id/1060/5598/3732.jpg */}
              <img className="img-fluid" src="/img/1060-5598x3732.jpg" alt="Coffee Night with Friends" />
            </div>
            <div className="col-12 col-lg-6 px-0 px-sm-2">
              <div className="py-4 px-3 px-lg-4">
                {/* TODO: This content can be data driven. */}
                <h1 className="mb-4 mb-lg-4">Coffee Night with Friends!</h1>
                <p><span className="fw-bold">Date:</span> TBD</p>
                <p><span className="fw-bold">Where:</span> {venue}</p>
                <p><span className="fw-bold">Description: </span><span className="d-block">Hello friends! Well it is that time again for our quarterly coffee night fundraiser! Come join us at {venue}. Each beverage you purchase will go to our fund. We also accept donations, see form at the bottom of the page.</span></p>
                <div className="row">
                  <div className="col-3">
                    <p className="fw-bold mb-1">Goal:</p>
                    <div className="fs-3">$5,000</div>
                  </div>
                  <div className="col">
                    <p className="fw-bold mb-3">Progress:</p>
                    <div className="progress" style={progress.bar}>
                      <div className="progress-bar bg-success" role="progressbar" style={progress.track} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">$2,475.50</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Nav Component */}
      <nav id="main-nav" className="bg-light-gray sticky py-3">
        <div className="container">
          <div className="row">
            {/* <div id="Logo" className="col-auto">SVG...</div> */}
            <span className="col-auto">About</span>
            <span className="col-auto">Our Cause</span>
            <span className="col-auto">Supporters</span>
            <span className="col-auto">Donate</span>
          </div>
        </div>
      </nav>
      {/* Body Component */}
      <section id="main-body" className="pt-3">
        <div className="container">
          {/* Can be a component */}
          <div id="about" className="py-3">
            <h2 className="mb-3">About</h2>
            <p>Bacon ipsum dolor amet duis occaecat frankfurter shank. Tri-tip qui buffalo velit tail consectetur t-bone chuck sausage do magna flank turkey mollit. Id brisket excepteur reprehenderit landjaeger, esse boudin laborum spare ribs ea ex ipsum consequat exercitation. Chicken anim flank exercitation nulla. Adipisicing pork loin consequat consectetur id brisket beef ribs shoulder. Swine meatloaf pork chop andouille enim esse doner. Pork chop deserunt excepteur magna hamburger.</p>
            <p>Ea non porchetta pork. Pork chop elit nulla biltong. Ut esse beef ribs incididunt voluptate est. Ullamco lorem meatloaf tri-tip sed capicola, in picanha veniam occaecat jerky landjaeger drumstick dolore mollit. Minim fatback rump boudin picanha shank landjaeger meatloaf.</p>
          </div>
          {/* Can be a component */}
          <div id="our-supporters" className="py-3">
            <h2 className="mb-3">Our Supporters</h2>
            <p>Thanks to our supporters! You're helping our event tremendously! Remember, <b>5</b> randomly picked lucky winners will win a $10 dollar gift card to <strong>Chick-fil-A</strong>! Yuummm!</p>
            <div id="our-supporters">
              <div className="row">
                <div>
                  {sample_loop}
                </div>
                <div className="col-4">
                  <div className="card position-static">
                    <div className="card-body px-4 py-3">
                      <h5 className="card-title mb-2">John Does</h5>
                      <p className="card-text mb-2">Amount: <span>$5.00</span></p>
                      <p className="card-text mb-2">Message: <span>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
          <div id="Donate" className="py-3">
            <h2 className="mb-3">Donate</h2>  
            <p className="mb-5">Thank you for your generosity, <span className="text-warning"><b>but since this page is just for demo purposes, majority of this form has been disabled intentionally.</b></span> You can add a name to test and see your submission above.</p>
            <div className="row">
              <div className="col-lg-8">
                <Donate />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-600 mt-5 py-4 py-md-5 text-center">
        <small><i><b>End of Page, thank you for checking out my page :-)</b></i></small>
      </footer>
    </main>
  );
}

export default hot(module)(App);
