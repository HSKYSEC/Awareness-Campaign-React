import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import video from "../images/video.png";
import AuthenticationFactors from "../images/factor-authentication.png";

const IAMIntroduction = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "25%" }}
      >
        <div id="logo">
          <h2>{props.text}</h2>
        </div>
      </div>

      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Introduction</h2>
            <div class="learn-explanation">
              <h4>
                In this module, you will get to learn more about different
                authentication methodologies. We are all using obsolete
                passwords to authenticate ourselves on platforms such as
                Facebook, Google, Mail and many more. Unfortunately, passwords
                aren’t safe anymore to protect your online identity. In recent
                reports from 2021 more than <b className="important">80%</b> of
                hacking-related breaches used stolen{" "}
                <u className="important">passwords</u> and/or{" "}
                <u className="important">weak passwords</u>. Thankfully secure
                alternatives have emerged with different methods of
                implementation and different benefits & disadvantages.
              </h4>

              <h3 className="important" style={{ textAlign: "center" }}>
                Authentication
              </h3>
              <img
                src={AuthenticationFactors}
                alt="logo"
                style={{
                  width: "25%",
                  textAlign: "center",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "20px",
                  float: "left",
                }}
              />
              <h4>
                In a business environment, Authentication forms one of the basic
                principles of a secure identity & access management environment.
                It provides a way for identifiable users to authenticate into a
                certain network using multiple authentication techniques.
                Authentication can be categorized into{" "}
                <b className="improtant">3 different groups</b>, depending on
                their method of implementation.<br></br>
                <br></br>
                <br></br>
                <h4>
                  <b className="important">Something you know:</b>
                  <h4>
                    This is the most common kind of authentication. We use
                    passwords every day to access our systems. Unfortunately,
                    something that you know can become something you just
                    forgot. And if you write it down, then other people might
                    find it. Examples:{" "}
                    <a className="important">
                      Passwords, passphrases, PINs, Security questions.
                    </a>
                  </h4>
                </h4>
                <br></br>
                <h4>
                  <b className="important">Something you own:</b>
                </h4>
                This form of human authentication removes the problem of
                forgetting something you know, but some object now must be with
                you any time you want to be authenticated. And such an object
                might be stolen and then becomes something the attacker has.
                Examples:{" "}
                <a className="important">
                  Authenticator apps, SMS Codes, Smart Cards or Security Key
                </a>
                <br></br>
                <br></br>
                <h4>
                  <b className="important">Something you are:</b>
                </h4>
                Lastly, new ways of authentication came about with the
                introduction of Biometrics. Those are elements that are unique
                to everyone else. Common forms of authentication are
                <a className="important">
                  {" "}
                  Fingerprint, FaceID, Eye scanning and Voice recognition.
                </a>
              </h4>
            </div>
            <Link to="/" className="btn">
              Back
            </Link>
            <Link to="/TraditionalPasswords" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAMIntroduction;
