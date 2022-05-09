import React from "react";
import BarChart_Employement from "./components/BarChart-Employement";
import BarChart_FactorsAuthentication from "./components/BarChart-FactorsAuthentication";
import BarChart_PasswordChange from "./components/BarChart-PasswordChange";
import Doughnut_Memorization from "./components/Doughtnut-Memorization";
import Doughnut_Reuse from "./components/Doughtnut-Reuse";
import LineChart_DifferentPasswords from "./components/LineChart-DifferentPasswords";
import LineChart_StrongPassword from "./components/LineChart-StrongPassword";
import PieChart from "./components/PieChart-Age";
import PieChart_Interested from "./components/PieChart-Interested";
import PieChart_CompromisedPassword from "./components/PieChart-Interested";
import BarChart_PasswordLength from "./components/BarChart-PasswordLength";
import BarChart_HowCompromised from "./components/BarChart-HowCompromised";
import PieChart_AgainstBreach from "./components/PieChart-AgainstBreach";
import BarChart_AuthMethodologies from "./components/BarChart-AuthMethodologies";
import RadarChart from "./components/RadarChart";
import RadarChart_not from "./components/RadarChart_not";
import { Link } from "react-router-dom";

const Outro = (props) => {
  return (
    <div>
      <div id="game" class="flex-center flex-column">
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="card flex-center flex-column ">
        <h3 className="important" style={{ textAlign: "center" }}>
          Survey Responses
        </h3>
        <div class="container" style={{ marginTop: "0%" }}>
          <div>
            <h4 style={{ padding: "20px" }}>
              <b className="important">Age groups:</b>
            </h4>
            <PieChart />
          </div>
          <div>
            <h4 style={{ padding: "20px", marginTop: "0%" }}>
              <b className="important">Employement Sector:</b>
            </h4>
            <BarChart_Employement />
          </div>
        </div>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginTop: "0%" }}>
              <b className="important">
                How often do you change your (non-business) passwords ?
              </b>
            </h4>
            <BarChart_PasswordChange />
          </div>
          <h4 style={{ padding: "20px", marginTop: "0%" }}>
            <b className="important" style={{ marginTop: "50%" }}>
              What techniques do you use to remember your passwords ?
            </b>
            <Doughnut_Memorization />
          </h4>
        </div>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginTop: "0%" }}>
              <b className="important">
                Do you reuse the same password on multiple websites ?
              </b>
            </h4>
            <Doughnut_Reuse />
          </div>

          <h4 style={{ padding: "20px", marginTop: "0%" }}>
            <b className="important" style={{ marginTop: "50%" }}>
              How many different passwords do you have ?
            </b>
            <LineChart_DifferentPasswords />
          </h4>
        </div>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginTop: "0%" }}>
              <b className="important">
                Which factors are you considering when defining a password ?{" "}
              </b>
            </h4>
            <BarChart_FactorsAuthentication />
          </div>

          <h4 style={{ padding: "20px", marginTop: "0%" }}>
            <b className="important" style={{ marginTop: "50%" }}>
              Password Length
            </b>
            <BarChart_PasswordLength />
          </h4>
        </div>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginTop: "0%" }}>
              <b className="important">
                How strong would you rate your passwords in general ?
              </b>
            </h4>
            <LineChart_StrongPassword />
          </div>

          <h4 style={{ padding: "20px", marginTop: "0%" }}>
            <b className="important" style={{ marginTop: "50%" }}>
              Have your passwords ever been compromised ?{" "}
            </b>
            <PieChart_CompromisedPassword />
          </h4>
        </div>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginTop: "0%" }}>
              <b className="important">
                How did you password get compromised ?{" "}
              </b>
            </h4>
            <BarChart_HowCompromised />
          </div>

          <h4 style={{ padding: "20px", marginTop: "0%" }}>
            <b className="important" style={{ marginTop: "50%" }}>
              What did you do against it ? <br></br>
            </b>
            <PieChart_AgainstBreach />
          </h4>
        </div>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginTop: "0%" }}>
              <b className="important">
                Are you using one of the authentication methodologies ?{" "}
              </b>
            </h4>
            <BarChart_AuthMethodologies />
          </div>

          <h4 style={{ padding: "20px", marginTop: "0%" }}>
            <b className="important" style={{ marginTop: "50%" }}>
              What is the reason to choose a method of authentication ?{" "}
            </b>
            <RadarChart />
          </h4>
        </div>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginTop: "0%" }}>
              <b className="important">
                What is the reason for not using one of the cited authentication
                methodologies?{" "}
              </b>
            </h4>
            <RadarChart_not />
          </div>

          <h4 style={{ padding: "20px", marginLeft: "5%" }}>
            <b className="important" style={{ marginTop: "50%" }}>
              Would you be interested in learning more about the different
              authentication methodologies?
            </b>
            <PieChart_Interested />
          </h4>
        </div>
        <h4 style={{ padding: "20px", marginTop: "10%" }}>
          <Link to="SurveyAnalysis" className="btn">
            Survey Analysis
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Outro;
