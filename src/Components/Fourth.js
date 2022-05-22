import React from "react";
import tick from "../tick.png";
import ".//Fourth.css";
import head4 from "../images/head4.png";

const Fourth = () => {
  return (
    <div>
      <img className="stepper justify-content-center" src={head4} alt="Logo" />
      <div className="stepper">
        <img className="tick" src={tick} alt="Logo" />
        <div>
          <h1 className="fs-2 fw-bold">Congratulations, Eren!</h1>
          <p className="para">
            You have completed onboarding, you can start using the Eden.
          </p>
        </div>

        <button type="button" class="btn btn-primary mt-2 button">
          Launch Eden
        </button>
      </div>
    </div>
  );
};

export default Fourth;
