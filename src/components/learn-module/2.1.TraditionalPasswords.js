import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import factors from "../images/Picture3.png";

const TraditionalPasswords = (props) => {
  return (
    <div>
      <div id="game" class="flex-center flex-column">
        <div>
          <h2>{props.text}</h2>
        </div>
      </div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "15%" }}
      ></div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Traditional Passwords</h2>
            <div class="learn-explanation">
              <h4>
                Passwords are the most common form of authentication used to
                control & access our online identity. They are widely used as
                they are <a className="important">simple, inexpensive</a> and{" "}
                <a className="important">convenient</a> to implement, but latest
                data analytics shows paradoxical results. Recent survey data
                shows that password frustration and abandoned transactions are a
                global problem. In multiple countries over half of the consumers
                have abandoned a purchase because of frustration of not knowing
                their password. If passwords are applied with the best practice
                security requirements, users should still change their password
                <b className="important"> every 3 months </b>to avoid any
                possible data breaches. This makes it very hard for users to
                keep track of all their passwords. Therefore multiple
                methodologies have emerged with each their benefits and
                drawbacks.
              </h4>
              <h4>
                When defining the right authentication tool, 3 different factors
                are predominant:
                <br></br>
              </h4>
              <img
                src={factors}
                alt="logo"
                style={{
                  marginTop: "6%",
                  width: "35%",
                  textAlign: "left",
                  marginRight: "5px",
                  margin: "auto",
                  float: "left",
                }}
              />
              <br></br>
              <h4>
                {" "}
                <a className="important">Security</a>
                <br></br>
                Does the authentication mechanism provide enough necessary
                protection for the users to protect their online identity from
                possible data breaches?
                <br></br>
                <a className="important">Usability</a>
                <br></br>
                Refers to the efficiency and user acceptance of an
                authentication system. Does it provide a good user experience
                without compromising too much security?
                <br></br>
                <a className="important">Cost</a>
                <br></br>
                Does the price have enough impact on the Usability & Security to
                make the cost of a certain authentication mechanism valuable?
              </h4>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/learn" className="btn">
              Back
            </Link>
            <Link to="/PasswordWeaknesses" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalPasswords;
