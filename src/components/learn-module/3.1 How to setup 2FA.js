import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import Facebook from "../images/fb.png";
import Gmail from "../images/gmail.png";
import TwoFASetup from "../images/2FASetup.gif";

const MFASetup = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "18%" }}
      >
        <div id="logo">
          <h2>{props.text}</h2>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center">
            <h2 id="question">2FA Setup (Gmail)</h2>
            <div class="learn-explanation">
              <h4>
                <p>
                  To setup 2FA for all Google operations (Gmail, Youtube, 3rd
                  party gmail applications), it is fairly simple:
                </p>
                <div style={{ marginLeft: "5%" }}>
                  <p>
                    <b className="important">1.</b> On Google click the account
                    icon
                  </p>
                  <p>
                    <b className="important">2.</b> Go to "Manage your account"
                  </p>
                  <p>
                    <b className="important">3.</b> Click "Security" on the left
                  </p>
                  <p>
                    <b className="important">4.</b> Sign into your google
                    account
                  </p>
                  <p>
                    <b className="important">5.</b> 2-Step Verification
                  </p>
                </div>

                <img
                  src={TwoFASetup}
                  alt="logo"
                  className="img1"
                  style={{
                    textAlign: "left",
                    width: "100%",
                    margin: "auto",
                    float: "right",
                    marginLeft: "3%",
                    marginTop: "3%",
                    marginBottom: "5%",
                  }}
                />
                <b>
                  <a style={{ textAlign: "left" }}>
                    After registering your device, you can start using one of
                    the explained 2FA methodologies available on the desired
                    website.
                  </a>{" "}
                </b>
              </h4>
            </div>
            <Link to="/2FA" className="btn">
              Back
            </Link>
            <Link to="/2FA-Directory" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFASetup;
