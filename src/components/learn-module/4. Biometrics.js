import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";

const Biometrics = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "10%" }}
      >
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Biometric Authentication</h2>
            <div class="learn-explanation">
              <h4>
                Biometrics Authentication is a technical term that refers to
                human's physical or behavioral traits authentication. With
                Biometric authentication, a data-generated model is produced
                that represents an individual user. Each time a user wants to
                authenticate, the generated model will be compared against one
                of the physiological traits of a user. The most well known
                physiological traits are:
                <br></br>
                <br></br>
                <table>
                  <tr>
                    <th style={{ color: "yellow" }}>
                      Physiological Identifiers
                    </th>
                    <th style={{ color: "yellow" }}></th>
                  </tr>
                  <tr>
                    <td>Fingerprints</td>
                    <td>
                      Optical Scanners, Capacitive Scanner, Ultrasonic Scanner
                    </td>
                  </tr>
                  <tr>
                    <td>Facial Recognition (Face)</td>
                    <td>Traditional, HID, 3-dimension recognition</td>
                  </tr>
                </table>
              </h4>
              <br></br>

              <h4>
                <p>
                  Biometric Authentication systems are less exposed to
                  vulnerabilities as users' biometric data are unique.
                  fraudulently replicating an individual’s fingerprint or facial
                  recognition becomes very difficult as robust solutions exist
                  with strong liveness/spoof detection. Because of the very
                  convenient usability and the strong secure mechanism,
                  biometrics are considered the most convenient authentication
                  methodology.{" "}
                </p>
              </h4>
            </div>
            <Link to="/2FAFactors" className="btn">
              Back
            </Link>
            <Link to="/Fingerprint" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biometrics;
