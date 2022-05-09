import React from "react";
import { Link } from "react-router-dom";
import One from "../images/SurveyAnalysis/1.png";
import Two from "../images/SurveyAnalysis/2.png";
import Three from "../images/SurveyAnalysis/3.png";
import Four from "../images/SurveyAnalysis/4.png";
import Five from "../images/SurveyAnalysis/4.png";
import Six from "../images/SurveyAnalysis/6.png";
import Eight from "../images/SurveyAnalysis/8.png";
import Nine from "../images/SurveyAnalysis/9.png";
import Ten from "../images/SurveyAnalysis/10.png";
import bis from "../images/SurveyAnalysis/bis.png";

const SurveyAnalysis = (props) => {
  return (
    <div>
      <div id="game" class="flex-center flex-column">
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="card flex-center flex-column ">
        <h3 className="important" style={{ textAlign: "center" }}>
          Survey Analysis
        </h3>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginLeft: "-50%" }}>
              <b className="important">
                Password Change - Differrent Passwords
              </b>
              <br></br>
              <h5>
                Between password change occurrence and the number of passwords,
                we can see a clear correlation, as people with an average of 1 -
                3 passwords and 4 - 6 passwords tend to only change their
                password <u> whenever their password gets compromised</u>. If we
                combine both results this equivalents to 84% of the survey
                results
              </h5>
              <img
                src={One}
                alt="logo"
                style={{
                  textAlign: "left",
                  marginTop: "0%",
                  width: "100%",
                  margin: "auto",
                  float: "left",
                  marginLeft: "0%",
                }}
              />
            </h4>
          </div>
          <div>
            <h4 style={{ padding: "20px", marginRight: "-50%" }}>
              <b className="important">Password Reuse - Differrent Passwords</b>
              <br></br>
              <h5>
                When we look at the people who never change their password, we
                can often see that they also reuse the same password over
                multiple websites making them very vulnerable to data breaches.{" "}
                <a
                  href="https://awarenesscampaign-authentication.netlify.app/PasswordsBreach"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  More info over data breaches.
                </a>
              </h5>

              <br></br>
              <img
                src={Two}
                alt="logo"
                style={{
                  textAlign: "left",
                  marginTop: "0%",
                  width: "100%",
                  margin: "auto",
                  float: "left",
                  marginLeft: "0%",
                }}
              />
            </h4>
          </div>
        </div>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginLeft: "-50%" }}>
              <b className="important">Password Reuse - Different Passwords</b>
              <br></br>
              <h5>
                When we look at the good side of things, we can see that people
                that have over 10+ passwords never reuse the same password on
                multiple websites. This percentage is 85%.
              </h5>
              <br></br>
              <img
                src={Three}
                alt="logo"
                style={{
                  textAlign: "left",
                  marginTop: "0%",
                  width: "100%",
                  margin: "auto",
                  float: "left",
                  marginLeft: "0%",
                }}
              />
            </h4>
          </div>
          <div>
            <h4 style={{ padding: "20px", marginRight: "-50%" }}>
              <b className="important">Password Length - Password Strength</b>
              <br></br>
              <h5>
                People with a password of 16+ or more characters rank their
                password on average 9.29 out of 10, while people with a password
                between the limit recommendation only rate their password on
                average 6.80 out of 10.
              </h5>
              <img
                src={Four}
                alt="logo"
                style={{
                  textAlign: "left",
                  marginTop: "0%",
                  width: "100%",
                  margin: "auto",
                  float: "left",
                  marginLeft: "0%",
                }}
              />
            </h4>
          </div>
        </div>
        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginLeft: "-50%" }}>
              <b className="important">Authentication Methodology</b>
              <br></br>
              <h5>
                Looking at the authentication methodologies, we can see
                Security, Usability & Cost are the 3 most important factors when
                choosing an authentication mechanism
              </h5>
              <img
                src={bis}
                alt="logo"
                style={{
                  textAlign: "left",
                  marginTop: "0%",
                  width: "100%",
                  margin: "auto",
                  float: "left",
                  marginLeft: "0%",
                }}
              />
            </h4>
          </div>
          <div>
            <h4 style={{ padding: "20px", marginRight: "-50%" }}>
              <b className="important">No authentication methodology</b>
              <br></br>
              <h5>
                Users with no knowledge of advanced authentication methodology
                are more often not changing to new technologies, because of the
                lack of familiarity. When diving further into the results we see
                that in most cases students are the one lacking familiarity.
              </h5>
              <img
                src={Six}
                alt="logo"
                style={{
                  textAlign: "left",
                  marginTop: "0%",
                  width: "100%",
                  margin: "auto",
                  float: "left",
                  marginLeft: "0%",
                }}
              />
            </h4>
          </div>
        </div>

        <div class="container" style={{ marginTop: "10%" }}>
          <div>
            <h4 style={{ padding: "20px", marginLeft: "-50%" }}>
              <b className="important">Password Change - Age</b>
              <br></br>
              <h5>
                On average 76% of the people over the age of 40 never change
                their password or only whenever they get compromised. Compared
                to the people aged 26-40, who change their password regularly.
              </h5>
              <br></br>
              <br></br>
              <br></br>
              <img
                src={Nine}
                alt="logo"
                style={{
                  textAlign: "left",
                  marginTop: "0%",
                  width: "100%",
                  margin: "auto",
                  float: "left",
                  marginLeft: "0%",
                }}
              />
            </h4>
          </div>
          <div>
            <h4 style={{ padding: "20px", marginRight: "-50%" }}>
              <b className="important">Employement Sector - Passwords </b>
              <br></br>
              <h5>
                Creative arts & Transport or logistics are the employment sector
                that puts the least importance into authentication. From the
                survey results, we can see that they often have 1-3 passwords
                that they never change. Compared to the people from IT &
                Computing, they have most of the time 10+ passwords and have a
                different password for each website.
              </h5>
              <img
                src={Ten}
                alt="logo"
                style={{
                  textAlign: "left",
                  marginTop: "0%",
                  width: "100%",
                  margin: "auto",
                  float: "left",
                  marginLeft: "0%",
                }}
              />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyAnalysis;
