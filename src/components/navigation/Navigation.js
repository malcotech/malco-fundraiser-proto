import React from "react";

// Components
import Progress from "../progress/Progress";

export default function Navigation() {
  // TODO: Make this reusable so that the anchoring functionality is not only limited to the navigation.
  function anchorTo(e) {
    const target = e.target;
    const anchorID = target.dataset.anchor;

    // FIXME: `scrollIntoView()` doesn't seem to work smoothly on mobile devices. Using `scrollTo` as a fallback for now..
    const position = document.getElementById(anchorID).offsetTop;
    const spacer = 90;
    window.scrollTo({
      left: 0,
      top: position - spacer,
      behavior: 'smooth'
    });
  }

  return (
    <nav id="main-nav" className="bg-light-gray border-bottom border-3 border-secondary sticky py-3">
      <div className="container">
        {/* TODO: Improve UI for mobile, it appears to tight when it gets to some phone sizes. */}
        <div className="row align-items-center">
          {/* TODO: Make this dynamic */}
          <span className="col-auto" onClick={anchorTo} data-anchor="about">About</span>
          {/*
            TODO: Make a sample Route/Page using this link
            <span className="col-auto">Our Cause</span>
          */}
          <span className="col-auto" onClick={anchorTo} data-anchor="our-supporters">Supporters</span>
          <span className="col-auto" onClick={anchorTo} data-anchor="donate">Donate</span>
          <div className="col-md-5 col-md-4 ms-auto">
            <Progress />
          </div>
        </div>
      </div>
    </nav>
  );
}
