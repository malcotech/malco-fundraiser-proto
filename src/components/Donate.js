import React from "react";
import "./Donate.scss";

class Donate extends React.Component {

  render() {
    return (
      <section>
        {/* First Name, Last Name, Card number, CSV, Address: 1, Address: 2, State, Zip, */}
        <form className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="inputFirstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="inputFirstName" />
          </div>
          <div className="col-sm-6">
            <label htmlFor="inputLastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="inputLastName" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCreditCard" className="form-label">Credit Card</label>
            <input type="text" className="form-control" id="inputCreditCard" disabled />
          </div>
          <div className="col-6 col-md-3">
            <label htmlFor="inputCSV" className="form-label">CSV <small>(security code)</small></label>
            <input type="text" className="form-control" id="inputCSV" disabled />
          </div>
          <div className="col-6 col-md-3">
            <label htmlFor="inputAmount" className="form-label">Amount <small>($ USD)</small></label>
            <input type="text" className="form-control" id="inputAmount" disabled />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="" disabled />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="(Optional) Apartment, studio, or floor" disabled />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" disabled />
          </div>
          <div className="col-6 col-md-3">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select" disabled>
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-6 col-md-3">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" disabled />
          </div>
          <div className="col-12 text-center text-md-start">
            <button type="submit" className="btn btn-primary btn-lg mt-4 px-5">Submit</button>
          </div>
        </form>
      </section>
    )
  }
}

export default Donate;