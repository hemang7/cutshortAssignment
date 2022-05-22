import React from "react";
import "../App.css";
import head1 from "../images/head1.png";

const First = () => {
  return (
    <div>
      <img className="stepper justify-content-center" src={head1} alt="Logo" />
      <div className="stepper">
        <div>
          <h1 className="fs-2 fw-bold">Welcome! First things first...</h1>
          <p className="para">You can always change them later.</p>
        </div>
        <div className="container mt-5 fw-bold head1">
          <label>Full Name </label>
          <br></br>
        </div>
        <input
          className="txtBox"
          type="text"
          placeholder="Steve Jobs"
          required
        />
        <br></br>
        <div className="container fw-bold head">
          <label>Display Name</label> <br></br>
        </div>
        <input className="txtBox" type="text" placeholder="Steve" required />{" "}
        <br></br>
        <button
          type="button"
          class="btn btn-primary mt-2 button"
          onClick={(event) => (window.location.href = "/second")}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default First;
