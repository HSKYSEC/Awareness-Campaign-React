import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";

const IAMIntroduction = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "5%" }}
      >
        <div>
          <h2>{props.text}</h2>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Password Weaknesses</h2>
            <div class="learn-explanation">
              <h4>
                <table>
                  <tr>
                    <th style={{ color: "red" }}>Weakness</th>
                    <th style={{ color: "yellow" }}>Explanation</th>
                  </tr>
                  <tr>
                    <td>Password Reusage</td>
                    <td>
                      A study shows that <a className="important">52%</a> of
                      users reuse the same password across multiple accounts
                    </td>
                  </tr>
                  <tr>
                    <td>Trimestrial password change</td>
                    <td>
                      NIST guidelines recommend users to change passwords every{" "}
                      <a className="important">90 days</a>. ( While passphrases
                      requires to be changed every{" "}
                      <a className="important">180 days</a> )
                    </td>
                  </tr>
                  <tr>
                    <td>Weak passwords</td>
                    <td>
                      Because of frequent password changes, users tend to opt
                      for weak passwords. Weak passwords are passwords with:{" "}
                      <p className="important">
                        {" "}
                        - Length lower than 6 characters
                      </p>
                      <p className="important">
                        {" "}
                        - No uppercase, lowercase, number & symbols{" "}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      Single point of failure
                    </td>
                    <td>
                      Using only a password provides a single point of failure.
                      In case a threat actor has access to your password, he has
                      access to your account. Alternative solutions for this are
                      MFA methodologies
                    </td>
                  </tr>
                </table>
              </h4>
            </div>
            <Link to="/TraditionalPasswords" className="btn">
              Back
            </Link>
            <Link to="/PasswordsBreach" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAMIntroduction;
