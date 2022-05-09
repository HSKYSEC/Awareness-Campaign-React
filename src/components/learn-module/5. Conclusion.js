import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import RadarChart from "./5.RadarChart";

const Conclusion = (props) => {
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
            <h2 id="question">Conclusion</h2>
            <div class="learn-explanation">
              <h4>
                Now that the different authentication factors have been
                discussed with their key important points which are{" "}
                <b className="important">security, usability and cost</b>, you
                can start identifying which factor plays a big role in defining
                your next authentication mechanism. If you want to stay in the
                traditional sense of working like passwords, I would advise you
                to choose passphrases that provide great usability with higher
                security than passwords with no additional extra cost. If cost
                does not provide an obstacle in defining your next
                authentication tool, I would highly advise Password Managers as
                they provide high security with good usability. In case security
                becomes your biggest concern, working with a 2FA mechanism such
                as TOTP authenticators or 2FA Security keys are your best option
                but at cost of less usability. To finalize, biometric
                authentication is a great option if provided with the right
                tools, as it is still very new on the market and not a lot of
                online platforms provide a way of using it.
              </h4>
              <br></br>
              <h4 className="important">
                Choose a authentication methodology:
              </h4>
              <RadarChart></RadarChart>
              <br></br>
              <br></br>

              <h4 style={{ marginTop: "25%" }}>
                <b className="important">
                  To conclude the awareness campaign, a small survey has been
                  setup, which will be used in my internship thesis to define
                  the different user behaviors with authentication
                </b>
              </h4>
            </div>

            <Link to="/Survey" className="btn-right">
              Survey{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
