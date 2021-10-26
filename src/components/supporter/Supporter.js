import React from "react";
import "./Supporter.scss";

// Helpers
import { formatNumbers } from 'Helpers';

// Redux
import { useSelector } from 'react-redux';

export default function Supporter() {
  const id = useSelector((state) => state.funds.value.currentFundId);
  const donorList = useSelector((state) => state.campaigns.value[id].donors);
  const showSupporters = donorList.map((donor, idx) => {
    const amount = donor.amount.toFixed(2);

    return (
      <div className="col-sm-6 col-md-4 col-lg-3 align-self-stretch mb-4" key={idx}>
        <div className="card position-static shadow-sm h-100">
          <div className="card-body px-4 py-3">
            <h5 className="card-title mb-2">{donor.name}</h5>
            <p className="card-text mb-2"><b>Amount:</b> <span>${formatNumbers(amount, 'addComma')}</span></p>
            {
              (donor.message.length > 0)
                ? <p className="card-text mb-2"><b>Message:</b> <span>{donor.message}</span></p>
                : ''
            }
          </div>
        </div>
      </div>
    )
  });

  return (
    <section className="row align-items-stretch">
      {showSupporters}
    </section>
  )
}
