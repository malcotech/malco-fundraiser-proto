import React from "react";
import "./Fund.scss";
import { Route, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

// Redux
import { useDispatch } from 'react-redux';
import { saveFundId } from 'Routes/campaigns/fundSlice';

// Components
import Donate from "Components/donate/Donor";
import Footer from 'Components/footer/Footer';
import { ProgressGoal } from "Components/progress/Progress";
import NavCampaign from "Components/navigation/NavCampaign";
import Supporter from "Components/supporter/Supporter";

function getFund() {
  const fundId = getFundId();

  return (fundId)
    // TODO: Handle possibility of duplicate Id's in the data.
    ? useSelector((state) => state.campaigns).value[fundId]
    : null;
}

function getFundId() {
  const id = (useParams().hasOwnProperty('id')) ? useParams().id : null;
  setFundId(id);
  return id;
}

function setFundId(id) {
  const dispatch = useDispatch();

  dispatch(saveFundId({
    currentFundId: id
  }));
}

function showAbout(fund) {
  if (fund.about.length > 0) {
    return (
      <section className="container p-3">
        <div id="about" className="anchor-section py-3">
          <h2 className="mb-3">About</h2>
          <p>{fund.about}</p>
        </div>
      </section>
    );
  }

  return '';
}

function showSupporters(fund) {
  return (
    <section id="our-supporters" className="anchor-section bg-gray-100 py-3">
      <div className="container px-3 py-md-3">
        <h2 className="mb-3">Our Supporters</h2>
        <p className="mb-5">Thanks to our supporters! You're helping our event tremendously! Remember, <b>5</b> randomly picked lucky winners will win a $10 dollar gift card to <strong>Chick-fil-A</strong>! Yuummm!</p>
        <div id="our-supporters">
          <Supporter />
        </div>
      </div>
    </section>
  );
}

function renderFund(fund) {
  return (
    <main>
      {/* Banner Component */}
      <section id="main-hero" className="bg-gray-800">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-12 col-lg-6 px-0 px-sm-2">
              {/* Source: https://i.picsum.photos/id/1060/5598/3732.jpg */}
              <img className="img-fluid" src={`${process.env.REACT_APP_BASENAME}${fund.bannerImage.default}`} alt={(fund.title) ? fund.title : ''} />
            </div>
            <div className="col-12 col-lg-6 px-0 px-sm-2">
              <div className="py-4 px-3 px-lg-4">
                {/* TODO: This content can be data driven. */}
                <h1 className="mb-4 mb-lg-4">{fund.title}</h1>
                <div className="row">
                  <div className="col-md-5">
                    <p><span className="fw-bold">Date:</span> {fund.date}</p>
                  </div>
                  <div className="col-md-auto">
                    <p><span className="fw-bold">Location:</span> {fund.location}</p>
                  </div>
                </div>
                {/* TODO: link the "form below" to Donate section */}
                <p><span className="fw-bold">Description: </span><span className="d-block mt-1">{fund.description}</span></p>
                <ProgressGoal />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Nav Component */}
      <NavCampaign />
      {/* Body Content */}
      <section id="main-body">
        {/* About Section */}
        {showAbout(fund)}
        {/* Supporters Section */}
        {showSupporters(fund)}
        {/* Donate Form */}
        <section className="container p-3">
          <div id="donate" className="anchor-section py-3">
            <h2 className="mb-3">Donate</h2>
            <p className="mb-5">Thank you for your generosity, <span className="text-warning"><b>but since this page is just for demo purposes, majority of this form has been disabled intentionally.</b></span> You can test out some of the available form fields below to see your submission above.</p>
            <div className="row">
              <div className="col-lg-8">
                <Donate />
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default function Fund() {
  const fund = getFund();
  const view = (fund)
    ? renderFund(fund)
    : <Route path="*">
        <div className="w-100 text-center">
          <div className="h1 py-5">404 Not Found</div>
        </div>
      </Route>

  return ( view );
}
