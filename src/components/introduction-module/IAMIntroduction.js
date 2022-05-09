import React from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";
import Authorization from "../images/Authorization.png";
import Authentication from "../images/Authentication.png";

const IAMIntroduction = (props) => {
  return (
    <div>
      <div id="game" class="flex-center flex-column">
        <div id="logo">
          <h2>{props.text}</h2>
        </div>
      </div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "22%" }}
      ></div>
      <div class="container">
        <div class="card">
          <div id="game" class="flex-center flex-column">
            <div class="learn-explanation">
              <h3>Identity & Access Management (IAM)</h3>
              <h4>
                IAM is a set of policies, procedures & technology that enables
                businesses to manage digital identities and allow or restrict
                certain users to access sensisitive corporate information. The
                main goal is provide a single digital identity for each user.
              </h4>
              <h4>
                Identity & Access Management is build around 2 fundamental
                ideas:
              </h4>
              <h3 className="important">Authorization</h3>
              <h4>
                Phase for allocation & delegation of permissions for individuals
                and clients. These define what the users will be able to access
                in an organization and which information is restricted
              </h4>
              <img
                src={Authorization}
                alt="logo"
                style={{
                  textAlign: "center",
                  display: "block",
                  margin: "auto",
                }}
              />
              <br></br>
              <br></br>
              <h3 className="important">Authentication</h3>
              <h4>
                Phase where entities (users) are verified against a database to
                see if the person are who they claim to be. This will done by
                checking credentials against the database. <br></br>
              </h4>
              <img
                src={Authentication}
                alt="logo"
                style={{
                  textAlign: "center",
                  display: "block",
                  margin: "auto",
                }}
              />
              <br></br>
              <br></br>
              <h5>
                <u
                  className="important"
                  style={{
                    textAlign: "center",
                    display: "block",
                    margin: "auto",
                  }}
                >
                  We are going to focus on the Authentication part of IAM by
                  providing a first awareness about good practices.
                </u>
              </h5>
            </div>
          </div>
          <Link to="/introduction" className="btn">
            Back
          </Link>
          <Link to="/" className="btn-right">
            Finish Introduction
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IAMIntroduction;
