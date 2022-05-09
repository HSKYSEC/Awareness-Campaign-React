import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import BiometricsFactorsPNG from "../images/Authentication Factors/Biometrics.png";

const BiometricsFactors = (props) => {
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
            <h2 id="question">Biometrics Factors - Fingerprint</h2>
            <div class="learn-explanation">
              <br></br>
              <h4>
                <img
                  src={BiometricsFactorsPNG}
                  alt="logo"
                  style={{
                    textAlign: "left",
                    marginTop: "0%",
                    width: "35%",
                    margin: "auto",
                    float: "left",
                    marginRight: "3%",
                  }}
                />
                <p>
                  Looking at the fundamentals of a perfect authentication
                  experience, we can define Biometrics as having a high
                  <b className="important"> Usability</b>. It requires
                  non-knowledge-based authentication as physiological traits are
                  used. When it comes to <b className="important">Security</b>,
                  it provides a very secure solution as the fingerprints are
                  stored differently to the way PINs and passwords are stored.
                  While a password is stored on the cloud, data from your
                  fingerprint is stored solely on your device. Servers and apps
                  have never access to your fingerprint data. However, a focus
                  of attention needs to be layed on the underlying technology,
                  as older technologies are vulnerable. Finally,
                  <b className="important"> Cost</b> can be seen as average, as
                  it is implemented in most new electronics. (smartphones &
                  laptops).
                </p>
                <br></br>
              </h4>
            </div>
            <Link to="/FacialRecognition" className="btn">
              Back
            </Link>
            <Link to="/Conclusion" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiometricsFactors;
