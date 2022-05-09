import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import PasswordManagersPNG from "../images/Authentication Factors/PasswordManagers.png";

const ChoosePW = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "13%" }}
      >
        <div>
          <h2>{props.text}</h2>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Choosing a Password Manager</h2>
            <div class="learn-explanation">
              <h4>
                {" "}
                <table>
                  <tr>
                    <th style={{ color: "yellow", textAlign: "center" }}>
                      Password Managers
                    </th>
                    <th style={{ color: "yellow", textAlign: "center" }}>
                      Price
                    </th>
                  </tr>
                  <tr>
                    <td style={{ padding: "40px" }}>
                      <a href="https://bitwarden.com/" className="important">
                        Bitwarden
                      </a>
                    </td>
                    <td>
                      {" "}
                      Bitwarden provides a free "basic" account that provides a
                      secure vault to manage data from any device at any
                      location. "premium" account provides features such as 2FA
                      (more info later) and extra Two-factor authentication
                      possibilities for a cost of €10/year.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "40px" }}>
                      <a href="https://www.lastpass.com/" className="important">
                        LastPass
                      </a>
                    </td>
                    <td>
                      {" "}
                      LastPass provides a free "basic" account that provides
                      also a secure vault. "premium" accounts provide features
                      such as cloud storage, a security dashboard and technical
                      support for a cost of €35/year.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "40px" }}>
                      <a href="https://www.dashlane.com/" className="important">
                        Dashlane
                      </a>
                    </td>
                    <td>
                      {" "}
                      Dashlane provides a free "basic" account that provides
                      also a secure vault. "premium" accounts provide features
                      such as a VPN, Dark web monitoring and cloud storage for a
                      cost of €48/year.
                    </td>
                  </tr>
                </table>
              </h4>
              <br></br>
              <h4>
                <img
                  src={PasswordManagersPNG}
                  alt="logo"
                  style={{
                    textAlign: "left",
                    marginTop: "8%",
                    width: "35%",
                    margin: "auto",
                    float: "left",
                    marginRight: "3%",
                  }}
                />

                <br></br>
                <p>
                  Password managers provides improved{" "}
                  <b className="important">Security</b> as it offers a secure
                  vault with randomly generated passwords for all your online
                  accounts. More notably it provides Two-factor authentication
                  functionalities. This comes at the cost of
                  <b className="important"> Usability</b> as a lot of changement
                  needs to be done to set up a password manager with the right
                  security requirements. More notably a small price will be
                  charged for it.
                </p>
                <br></br>
              </h4>
            </div>
            <Link to="/PasswordManagers" className="btn">
              Back
            </Link>
            <Link to="/2FA" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePW;
