import React from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";

const Introduction = (props) => {
  return (
    <div>
      <div id="game" class="flex-center flex-column">
        <div id="logo">
          <h2>{props.text}</h2>
        </div>
      </div>
      <div class="container">
        <div class="card">
          <div id="game" class="flex-center flex-column">
            <div class="learn-explanation">
              <h3 className="important">Welcome!</h3>
              <h4>
                First and foremost I want to thank you for participating in my
                awareness campaign around authentication. The purpose of this
                awareness campaign is to define user behaviour around
                authentication to find out if a certain authentication method is
                more suitable than another. During the interactive awareness
                campaign, you will get to know all authentication methodologies
                with their benefits, drawbacks and implementation.
              </h4>

              <h4>
                {" "}
                Afterwards, a survey will be provided to see if your user
                behaviour has changed around authentication. The awareness
                campaign was completely made by me, so in case a problem occurs,
                you can always contact me at the following address:
                <br></br>
                <a
                  href="mailto: R0653826@student.thomasmore.be"
                  className="important"
                >
                  R0653826@student.thomasmore.be
                </a>
              </h4>
            </div>
          </div>
          <Link to="/" className="btn">
            Back
          </Link>
          <Link to="/productspecification" className="btn-right">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
