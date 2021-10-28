import React, { useEffect } from "react";
import { useCookies } from 'react-cookie';

// Components
import SubmissionLoader from 'Components/progress/SubmissionLoader';

export default function Account() {
  return (
    <main style={{ height: `${window.outerHeight}px` }}>
      <div className="row g-0 h-100">
        <div className="col-auto h-100 text-white">
          <nav className="bg-black-800 h-100 px-3 pt-3 pb-5" style={{ width: '300px' }}>
            <p className="h5">Account</p>
            <hr/>
            <a className="c-pointer d-block text-link">
              Campaigns
            </a>
            <a className="c-pointer d-block text-link">
              Status
            </a>
            <hr />
            <a className="c-pointer d-block text-link">
              Settings
            </a>
          </nav>
        </div>
        <div className="col">
          <section className="p-3">
            Account in Development...
          </section>
        </div>
      </div>
    </main>
  )
}
