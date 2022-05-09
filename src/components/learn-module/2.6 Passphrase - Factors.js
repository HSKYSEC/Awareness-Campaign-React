import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import PassphrasePNG from "../images/Authentication Factors/Passphrase.png";

const PassphraseFactors = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "5%" }}
      >
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Authentication Factors - Passphrase</h2>
            <div class="learn-explanation">
              <br></br>
              <h4>
                <img
                  src={PassphrasePNG}
                  alt="logo"
                  style={{
                    textAlign: "left",
                    marginTop: "8%",
                    width: "40%",
                    margin: "auto",
                    float: "left",
                    marginRight: "3%",
                  }}
                />
                <p>
                  Passphrases provide a better{" "}
                  <b className="important">security </b>
                  alternative than a password as they are more robust against
                  Bruteforce attacks, but they are still vulnerable to common
                  bad practices from users (Bad storage or implementation). When
                  it comes to <b className="important">Usability</b> it is a
                  great improvement to passwords as passphrase memorability is
                  inferior. The implementation <b className="important">Cost</b>{" "}
                  of passphrases are none, as no additional hardware is
                  required.
                </p>
                <br></br>
              </h4>
            </div>
            <Link to="/CreatePassphrase" className="btn">
              Back
            </Link>
            <Link to="/PasswordManagers" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassphraseFactors;
