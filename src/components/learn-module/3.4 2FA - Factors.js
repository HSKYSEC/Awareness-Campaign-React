import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import TWOFAPNG from "../images/Authentication Factors/2FA.png";

const TWOFAFactors = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "7%" }}
      >
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Authentication Factors - 2FA</h2>
            <div class="learn-explanation">
              <br></br>
              <h4>
                <img
                  src={TWOFAPNG}
                  alt="logo"
                  style={{
                    textAlign: "left",
                    marginTop: "8%",
                    width: "35%",
                    margin: "auto",
                    float: "left",
                    marginRight: "3%",
                  }}
                />
                <p>
                  Looking at what Two-Factor authentication provides in term of
                  security, we arguably can't deny it provides the highest form
                  of <b className="important">Security</b>. As 2 manners of
                  authentication are used (ex: Something you know, Something you
                  have) you are guaranteed to have optimal security. Two-Factor
                  authentication is also available in many forms without any
                  additional <b className="important">Cost</b>. The only
                  cumbersome it's <b className="important">Usability</b>. as
                  often enough, people are not ready to spent the extra time
                  doing a secondary authentication factor.
                </p>
                <br></br>
              </h4>
            </div>
            <Link to="/2FA-Directory" className="btn">
              Back
            </Link>
            <Link to="/Biometrics" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TWOFAFactors;
