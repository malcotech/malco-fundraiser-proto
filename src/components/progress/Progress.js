import React from "react";
import "./Progress.scss";

// Redux
import { useSelector } from 'react-redux';

// TODO: Make the goal more configurable and/or dynamic
const goal = 5000;

export function ProgressGoal() {
  return (
    <div className="text-lg-center mt-sm-4 mt-md-0 mt-xl-4 mt-xxl-5">
      <p className="fw-bold fs-4 mb-0">Goal: <span className="fs-2">${goal.toFixed(2)}</span></p>
    </div>
  )
}

export default function Progress() {
  const donorList = useSelector((state) => state.donor);
  let progressAmount = 0;
  let progressState = 0;

  donorList.value.map((donor) => {
    progressAmount += donor.amount;
  });

  progressState = Math.round((progressAmount / goal) * 100);

  const progressStyle = {
    width: `${progressState}%`
  }
  const progressDisplay = (progressAmount >= goal)
    ? '$' + `${progressAmount.toFixed(2)} ~ Goal Reached!`
    : '$' + progressAmount.toFixed(2);

  return (
    <div className="row align-items-center mt-3 mt-md-0">
      <div className="col-auto">
        <p className="fw-bold mb-1">Progress: </p>
      </div>
      <div className="col">
        <div className="progress progress--rounded sticky">
          <div className="progress-bar bg-success" style={progressStyle} role="progressbar" aria-valuenow={progressState} aria-valuemin="0" aria-valuemax="100"><b>{progressDisplay}</b></div>
        </div>
      </div>
    </div>
  )
}
