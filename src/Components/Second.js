import React from "react";
import "./Second.css";
import head2 from "../images/head2.png";

const Second = () => {
  

  return (
    <div>
    <img className="stepper justify-content-center" src={head2} alt="Logo" />
    <div className="stepper">
      <div>
        <h1 className="fs-2 fw-bold">Let's set up a home for all your work</h1>
        <p className="para">You can always create another workspace later.</p>
      </div>
      <div className="container mt-5 fw-bold head1">
        <label>Workspace Name </label>
        <br></br>
      </div>
      <input className="txtBox" type="text" placeholder="Eden" />
      <br></br>
      <div className="container mb-1 fw-bold head">
        <label>
          Workspace URL <span>(optional)</span>
        </label>{" "}
        <br></br>
      </div>
      <input className="opTxt" type="text" placeholder="www.eden.com/" required/>
      <input className="txtBox2" type="text" placeholder="Example" required/> <br></br>
      <button
        type="button"
        class="btn btn-primary mt-2 button"
        onClick={event =>  window.location.href='/third'}
      >
        Create Workspace
      </button>
    </div>
    </div>
  );
};

export default Second;
