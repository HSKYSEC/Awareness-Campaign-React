import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import OpticalScanners from "../images/OpticalScanners.jpg";
import CapacitiveScanners from "../images/CapacitiveScanners.jpg";
import UltrasonicScanners from "../images/UltrasonicScanners.jpg";
import FingerprintFactors from "../images/Fingerprint.png";

const Fingerprint = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "20%" }}
      >
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Scanners</h2>
            <div class="learn-explanation">
              <br></br>
              <h4 className="important">
                How do <u className="important">Optical Scanners</u> work?
              </h4>
              <h4>
                <img
                  src={OpticalScanners}
                  alt="logo"
                  className="img1"
                  style={{
                    textAlign: "left",
                    width: "30%",
                    margin: "auto",
                    float: "right",
                    marginLeft: "5%",
                    borderRadius: "10px 10px 10px 10px",
                  }}
                />
                <p>
                  The way optical scanners work is by shining light over your
                  fingerprint using bright LEDs and taking a digital picture.
                  The light-sensitive microchip makes a digital picture by
                  looking at the ridges and valleys of the fingerprint, turning
                  them later into a binary data stream consisting of 1’s and 0’s
                  that will create a user’s own personal code. This personal
                  code will be encrypted and stored on any device and won’t be
                  available for access.{" "}
                </p>
              </h4>
              <h4 className="important">
                How do <u className="important">Capacitive Scanners</u> work?
              </h4>
              <h4>
                <img
                  src={CapacitiveScanners}
                  alt="logo"
                  className="img1"
                  style={{
                    textAlign: "left",
                    marginTop: "2%",
                    width: "20%",
                    margin: "auto",
                    float: "left",
                    marginRight: "3%",
                    borderRadius: "10px 10px 10px 10px",
                  }}
                />
                <p>
                  A first hybrid solution used today is capacitive scanners.
                  This type of scanner can be found on most of the front and
                  rear of smartphones, as well as in cutting-edge in-display
                  models. Because of their added security mechanism capacitive
                  scanners have gained in popularity and are standard
                  implementation for most technological advancements.
                </p>
                <br></br>
                <p>
                  Capacitive scanners acquire data using arrays of tiny
                  capacitor circuits. They draw energy from a battery and are
                  used to track the specifics of a fingerprint by attaching them
                  to conductive plates on the scanner’s surface. When the ridges
                  of our finger is placed on the conductive plate our stored
                  charge will somewhat alter each time. These changes will be
                  tracked using an op-amp integrator circuit, which can
                  subsequently be recorded to make the necessary changes.
                </p>
              </h4>
              <h4 className="important">
                How do <u className="important">Ultrasonic Scanners</u> work?
              </h4>
              <h4>
                <img
                  src={UltrasonicScanners}
                  alt="logo"
                  className="img1"
                  style={{
                    textAlign: "left",
                    width: "30%",
                    margin: "auto",
                    float: "right",
                    marginLeft: "5%",
                    borderRadius: "10px 10px 10px 10px",
                  }}
                />
                <p>
                  Ultrasonic sensors are the most recent fingerprint scanning
                  technology to join the smartphone market. The technology was
                  introduced in 2016 with Qualcomm’s Sense ID technology. It
                  consists of an ultrasonic transmitter and a receiver to
                  actually capture the features of a fingerprint. When a finger
                  is placed over the scanner, an ultrasonic pulse will be
                  transmitted. Depending on the ridges, valleys and pores pulse
                  signals will be bounded back or absorbed.
                </p>
              </h4>
            </div>
            <Link to="/Fingerprint" className="btn">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fingerprint;
