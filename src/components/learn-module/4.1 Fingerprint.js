import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";

const Fingerprint = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "13%" }}
      >
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Fingerprint - How does it work?</h2>
            <div class="learn-explanation">
              <h4>
                How does fingerprint authentication work? The oldest biometric
                identifier that has been used for authentication purposes are
                fingerprint scanners. They started to be utilized in the 19th
                century when the FBI funded the first development of a first
                computerized fingerprint scanner which consisted of verifying an
                individual’s identity based on one or more of their
                fingerprints. The concept of fingerprint authentication has been
                leveraged over the last decades in a multitude of applications,
                like digital identity, criminal justice and financial
                services as it brings a unique way to authenticate a user as it
                is based on the fundamental of{" "}
                <b className="important">“Something you are”</b>, which means it
                is very difficult to alter and durable over a lifetime.
                Therefore fingerprint recognition systems are still widely used
                to this day as the convenience, security and performance
                characteristics of fingerprints are optimal. The most common
                fingerprint sensors to this day are Optical Scanners, Capacitive
                Scanners and Ultrasonic Scanners.{" "}
                <a href="/FingerprintMoreInfo" className="important">
                  More info.
                </a>{" "}
              </h4>

              <h3 id="question" className="important">
                Security
              </h3>
              <div class="learn-explanation">
                <h4>
                  For years, the security of fingerprint-based authentication
                  has been a topic of fierce debate. Back in 2013 with the rise
                  of the first commercialized fingerprint authentication on the
                  iPhone 5S, researchers found that fingerprints were easily
                  crackable by using a glass surface and a fingerprint mold. But
                  technology never stands still and improvements occurred over
                  the years making the margin of error decrease by the year as
                  new fingerprint scanners came about. Nevertheless,
                  fingerprints still can be outsmarted but the effort for doing
                  so is rather an expensive process, at least timewise, which
                  means that for the ordinary user it should provide enough
                  security for your online identity.
                </h4>
                <br></br>
              </div>
            </div>
            <Link to="/Biometrics" className="btn">
              Back
            </Link>
            <Link to="/FacialRecognition" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fingerprint;
