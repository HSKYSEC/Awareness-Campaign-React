import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import FacialRecognitionIMG from "../images/FacialRecognition.png";

const FacialRecognition = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "30%" }}
      >
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Facial Recognition - How does it work?</h2>
            <div class="learn-explanation">
              <h4>
                Since the late 1960s Facial Recognition was a new topic in the
                industry of biometric authentication. It performed basic
                analysis on the user’s personal expressions and facial landmarks
                such as eye centering, mouth placement and head shape. In this
                day and age, we can identify Facial recognition as a way of
                identifying and confirming a user’s identity using advanced
                facial patterns.
                <br></br>
                <br></br>
                <h4 style={{ textAlign: "center" }}>
                  <b className="important">How facial recognition works?</b>
                </h4>
                <img
                  src={FacialRecognitionIMG}
                  alt="logo"
                  style={{
                    textAlign: "left",
                    width: "100%",
                    margin: "auto",
                    float: "right",
                    marginLeft: "5%",
                    borderRadius: "10px 10px 10px 10px",
                  }}
                />
                <b className="important">1. Capture </b>
                <br />A computer will analyze image data and look for a specific
                set of traits in a user’s face. It all begins with a collection
                of images and videos that will be performed on people’s faces.{" "}
                <br></br>
                <b className="important">2. Reading</b>
                <br />
                The computer will then be trained to read the geometry of a face
                to identify specific facial traits and will gather more than 68
                different landmark points of each individual. Regions around the
                eyes, nose, mouth, chin, jaw and eyebrows will be captured.
                <br></br>
                <b className="important">3. Analysis</b> <br />
                Your facial signature is compared to a database of known faces.
                This database has collected pictures of your face and will
                compare them again each time.
                <br></br>
                <b className="important">3. Recognition</b>
                <br />A pattern has been found that matches your faceprint.
                Which will lead the user to authenticate.
                <br></br>
                <br></br>
                <br></br>
              </h4>
              <br></br>
            </div>
            <Link to="/Fingerprint" className="btn">
              Back
            </Link>
            <Link to="/BiometricFactors" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialRecognition;
