import React from "react";
import "./Supporter.scss";

// Redux
import { useSelector } from 'react-redux';

export default function Supporter() {
  const donorList = useSelector((state) => state.donor);
  const showSupporters = donorList.value.map((donor, idx) => {
    const amount = donor.amount.toFixed(2);

    return (
      <div className="col-4 col-lg-3 align-self-stretch mb-4" key={idx}>
        <div className="card position-static shadow-sm h-100">
          <div className="card-body px-4 py-3">
            <h5 className="card-title mb-2">{donor.name}</h5>
            <p className="card-text mb-2"><b>Amount:</b> <span>${amount}</span></p>
            <p className="card-text mb-2"><b>Message:</b> <span>{donor.message}</span></p>
          </div>
        </div>
      </div>
    )
  });

  return (
    <section>
      <div className="row align-items-stretch">
        {showSupporters}
      </div>
    </section>
  )
}
