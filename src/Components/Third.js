import React from "react";
import "./Third.css";
import Card from "react-bootstrap/Card";
import myself from "../myself.png";
import team from "../team.png";
import head3 from "../images/head3.png";

const Third = () => {
  return (
    <div>
      <img className="stepper justify-content-center" src={head3} alt="Logo" />
      <div className="stepper">
        <div className="bottom">
          <h1 className="fs-2 fw-bold">How are you planning to use Eden?</h1>
          <p className="para">
            We'll streamline your setup experience accordingly.
          </p>
        

        <div className="container d-flex justify-content-center">
          <Card className="card">
            <img className="myself" src={myself} alt="Logo" />
            <Card.Body>
              <Card.Title className="fw-bold">For Myself</Card.Title>
              <Card.Text>
                Write better. Think more clearly. Stay organized.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card">
            <img className="myself" src={team} alt="Logo" />
            <Card.Body>
              <Card.Title className="fw-bold">With My Team</Card.Title>
              <Card.Text>
                Wikis, docs, tasks & projects, all in one place.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <button
          type="button"
          class="btn btn-primary mt-2 button"
          onClick={(event) => (window.location.href = "fourth")}
        >
          Create Workspace
        </button>
      </div>
    </div>
    </div>
  );
};

export default Third;
