import React from "react";

export default function SubmissionLoader() {
  return (
    <div className="row align-items-center g-0">
      <div className="col-auto">
        <div className="spinner-border text-warning mr-3 mx-2" role="status"></div>
      </div>
      <div className="col-auto">
        <i>Simulating Submission...</i>
      </div>
    </div>
  )
}
