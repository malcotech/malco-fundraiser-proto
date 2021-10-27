import React from "react";
import { Link } from 'react-router-dom';
import './Hero.scss';

export default function Hero(props) {
  const cta = (props.hasOwnProperty('bannerLink'))
    ? <div className="text-center mt-4 w-100"><Link to={props.bannerLink.url} className="btn btn-primary btn-lg">{props.bannerLink.text}</Link></div>
    : '';

  return(
    <section className="hero d-flex flex-column justify-content-center px-4 text-center">
      <p className="h1 mb-1">Ready to make a difference?</p>
      <p className="h4 mb-4">ipsum</p>
      <p className="desc">Bacon ipsum dolor amet shank chicken flank, corned beef picanha salami biltong tri-tip pork ham hock venison pancetta t-bone drumstick. Sirloin picanha landjaeger chuck. T-bone chislic turducken shoulder.</p>
      {cta}
    </section>
  );
}
