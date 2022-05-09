import React from "react";
import general from "../images/SurveyAnalysis/general.jpg";
import { Link } from "react-router-dom";

const Outro = (props) => {
  return (
    <div>
      <div id="game" class="flex-center flex-column">
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="container">
        <div id="home" class="flex-center flex-column">
          <h4 style={{ marginTop: "-10%" }}>
            <img
              src={general}
              alt="logo"
              style={{
                textAlign: "left",
                marginTop: "0%",
                width: "125%",
                marginLeft: "-15%",
              }}
            />
            During the survey <b className="important">63 participants</b>{" "}
            participated, throughout the study questions about Password
            Creation, Password Habits, Password Breaches & Authentication
            methodologies have been discussed. In case you are interested in the
            responses you can click on{" "}
            <b className="important"> Survey Responses </b>. If you are
            wondering about correlation points you can look at the{" "}
            <b className="important">Survey Analysis</b>
          </h4>
          <Link to="/SurveyResponses" className="btn">
            {" "}
            <b style={{ color: "#2e2e38" }}>Survey Responses</b>
          </Link>
          <Link to="/SurveyAnalysis" className="btn">
            {" "}
            <b style={{ color: "#2e2e38" }}>Survey Analysis</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Outro;
