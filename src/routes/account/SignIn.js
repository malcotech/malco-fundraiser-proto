import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie';

// Components
import SubmissionLoader from 'Components/progress/SubmissionLoader';

export default function SignIn() {
  const cookieName = 'malco_login_status';
  const [cookies , setCookie] = useCookies([cookieName]);
  const isLoggedIn = cookies.hasOwnProperty(cookieName) && cookies[cookieName] === 'logged_in';

  useEffect(() => {
    // Mount
    document.querySelector('html').classList.add('bg-gray-100');

    return () => {
      // Unmount
      document.querySelector('html').classList.remove('bg-gray-100');
    }
  });

  function sampleSignIn() {
    if (!isLoggedIn) {
      const loader = document.querySelector('#form-loader');

      loader.style.opacity = 1;

      setTimeout(() => {
        loader.style.opacity = 0;
        setCookie(cookieName, 'logged_in', {
          expires: new Date(new Date().setDate(32)), // Beginning of the Month
          path: '/'
        });

        <Redirect to="/account" />
      }, 5000);
    }
  }

  return (
    <main className="bg-gray-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <section className="bg-white p-5">
              <h1 className="mb-4">Sign In</h1>
              <form>
                <div className="input-group flex-column mb-4">
                  <div className="col mb-2">
                    {/* TODO: Sanitize Input */}
                    <label htmlFor="inputUserName" className="form-label fw-bold">Username</label>
                    <input type="text" className="form-control" id="inputUserName" disabled />
                  </div>
                  <div className="col text-left">
                    {/* TODO: Sanitize Input */}
                    <label htmlFor="inputPassword" className="form-label fw-bold">Password</label>
                    <input type="text" className="form-control" id="inputPassword" disabled />
                  </div>
                </div>
                <div className="btn btn-primary mb-3 px-5 user-select-none" onClick={sampleSignIn}>Submit</div>
                <small className="d-block mb-3 text-warning">* This is a protoype, simply click on the submit button to "Sign In".</small>
              </form>
              <div id="form-loader" className="mt-4" style={{ opacity: 0 }}>
                <SubmissionLoader />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
