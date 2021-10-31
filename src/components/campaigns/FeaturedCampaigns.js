import React from "react";
import { Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

export default function FeaturedCampaigns() {
  const campaigns = useSelector((state) => state.campaigns).value;
  const featuredCampaigns = Object.keys(campaigns).map((fundId, idx) => {
    const fund = campaigns[fundId];
    let link = `/campaigns/fund/${fundId}`;

    return (
      <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
        <div className="card w-100">
          <img src={`${process.env.REACT_APP_BASENAME}${fund.bannerImage.default}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{fund.title}</h5>
            <p className="card-text">{fund.description}</p>
            <Link to={link} className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
      </div>
    )
  });

  return (
    <section className="row align-items-stretch">
      {featuredCampaigns}
    </section>
  )
}
