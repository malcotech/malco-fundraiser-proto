import React, { useState } from "react";
import "./Donor.scss";

// Redux
import { useDispatch } from 'react-redux';
import { addDoner } from './donorSlice';

export default function Donate() {
  const delaySimulation = 3000;
  const dispatch = useDispatch();

  function onDonate(e) {
    e.preventDefault();
    const target = e.target;
    // TODO: Look into best practices on how to target specific elements in React.
    const firstName = target.querySelector('#inputFirstName');
    const lastName = target.querySelector('#inputLastName');

    // TODO: Improve Form Validation, Something to try:
    // 1. Make it Dynamic, collect all Necessary fields
    // 2. Loop through it and check value and validate.
    if (!firstName.value) {
      firstName.classList.add('is-invalid');
    } else {
      firstName.classList.remove('is-invalid');
    }
    if (!lastName.value) {
      lastName.classList.add('is-invalid');
    } else {
      lastName.classList.remove('is-invalid');
    }

    if (firstName.value && lastName.value) {
      const submit = target.querySelector('#btn-submit');
      const loader = target.querySelector('#form-loader');

      if (!submit.disabled) {
        submit.disabled = true;
        loader.classList.add('d-flex');

        setTimeout(() => {
          dispatch(addDoner({
            name: `${firstName.value} ${lastName.value}`,
            amount: 500.00,
            message: 'Add Message here'
          }));

          submit.disabled = false;
          loader.classList.remove('d-flex');
        }, delaySimulation);
      }
    }
  }

  return (
    <section>

      <form className="row g-3" onSubmit={onDonate}>
        <div className="col-sm-6">
          {/* TODO: Sanitize Input */}
          <label htmlFor="inputFirstName" className="form-label fw-bold">First Name</label>
          <input type="text" className="form-control" id="inputFirstName" />
        </div>
        <div className="col-sm-6">
          {/* TODO: Sanitize Input */}
          <label htmlFor="inputLastName" className="form-label fw-bold">Last Name</label>
          <input type="text" className="form-control" id="inputLastName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCreditCard" className="form-label fw-bold">Credit/Debit Card Number</label>
          <input type="text" className="form-control" id="inputCreditCard" disabled />
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="inputExpiration" className="form-label fw-bold">Card Expiration</label>
          <input type="text" className="form-control" id="inputExpiration" disabled />
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="inputCVC" className="form-label fw-bold">CVC <small className="fw-normal">(security code)</small></label>
          <input type="text" className="form-control" id="inputCVC" disabled />
        </div>
        <div className="col-md-3">
          {/* TODO: Give End-User ability to add an Amount :-) */}
          <label htmlFor="inputAmount" className="form-label fw-bold">Amount <small className="fw-normal">($ USD)</small></label>
          <input type="text" className="form-control" id="inputAmount" disabled />
        </div>
        <div className="col-md-9">
          {/* TODO: Sanitize Input */}
          <label htmlFor="inputFirstName" className="form-label fw-bold">Message <small className="fw-normal">(Optional)</small></label>
          <input type="text" className="form-control" id="inputFirstName" />
        </div>

        <div className="col-12 text-center text-md-start mt-4">
          <div className="row align-items-center">
            <div className="col-auto">
              <button id="btn-submit" type="submit" className="btn btn-primary btn-lg px-5 user-select-none">Submit</button>
            </div>
            {/* TODO: See how progress messages can be handled in React... */}
            <div id="form-loader" className="col align-items-center">
              <div className="spinner-border text-warning mr-3" role="status"></div>
              <i className="px-3">Simulating Submission...</i>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
