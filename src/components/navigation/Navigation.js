import React from "react";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

// Components
import Progress from "../progress/Progress";

export default function Navigation() {
  // TODO: Make this reusable so that the anchoring functionality is not only limited to the navigation.
  function anchorTo(e) {
    const target = e.currentTarget;
    const anchorID = target.dataset.anchor;
    let position = 0;

    if (anchorID !== 'TOP') {
      const anchorPosition = document.getElementById(anchorID).offsetTop;
      const spacer = document.getElementById('main-nav').offsetHeight;

      position = anchorPosition - spacer;
    }

    // NOTE: `scrollIntoView()` doesn't seem to work smoothly on mobile devices. Using `scrollTo` for now..
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });
  }

  return (
    <nav id="main-nav" className="bg-light-gray border-bottom border-3 border-secondary sticky py-3">
      <div className="container">
        {/* TODO: Improve UI for mobile, it appears to tight when it gets to some phone sizes. */}
        <div className="row align-items-center">
          <span className="col-auto c-pointer link-success" onClick={anchorTo} data-anchor="TOP">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </span>
          {/* TODO: Make this dynamic */}
          <span className="col-auto c-pointer link-primary" onClick={anchorTo} data-anchor="about">About</span>
          {/*
            TODO: Make a sample Route/Page using this link
            <span className="col-auto">Our Cause</span>
          */}
          <span className="col-auto c-pointer link-primary" onClick={anchorTo} data-anchor="our-supporters">Supporters</span>
          <span className="col-auto c-pointer link-primary" onClick={anchorTo} data-anchor="donate">Donate</span>
          <div className="col-md-5 col-md-4 ms-auto">
            <Progress />
          </div>
        </div>
      </div>
    </nav>
  );
}
