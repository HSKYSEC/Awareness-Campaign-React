import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";

const PasswordManagers = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "15%" }}
      >
        <div>
          <h2>{props.text}</h2>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Password Managers</h2>
            <div class="learn-explanation">
              <h4>
                {" "}
                One of the most important steps you can take to protect your
                online identity is to use a unique, strong password for each of
                your accounts and applications. Unfortunately, it is almost
                impossible to remember all of the different passwords. A study
                from 2017 reported that users on average have
                <b className="important"> 191 passwords</b> linked to their
                online identity. Together with the growing percentage of
                password reuse a solution was found.
              </h4>
              <h3 id="question" className="important">
                How do Password Managers work?
              </h3>
              <h4>
                Password Manager work by storing all of your passwords into a
                database also called a vault. The password manager encrypts all
                vaults content and protects it with a single master password.
                This password is the only password you will ever need to
                remember when accessing online information as it will
                automatically input the given password for each application.
                <br></br>
                <br></br>
                <table>
                  <tr>
                    <th style={{ color: "yellow" }}>Functionalities:</th>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      Secure Password Generator
                    </td>
                    <td>
                      Password managers have an integrated tool to generate
                      complex password for all you online platforms. Those
                      password won't need to be remembered as the password
                      manager will do it for you.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      Save & Autofill Passwords
                    </td>
                    <td>
                      Password managers provide a way for users to automatically
                      input user credentials when login in. Furthermore,
                      password managers also provide a way to save newly created
                      credentials
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      Vault Storage Location
                    </td>
                    <td>
                      Password Managers have the possibility to store
                      credentials locally in the cloud. It is a preferred way,
                      as it provides the user cloud storage, meaning it can
                      connect from anywhere at anytime.
                    </td>
                  </tr>
                </table>
              </h4>
              <br></br>
              <h4>
                Password Managers provide a secure alternative with a easy user
                experience, but at a small cost. In general, password managers
                cost can vary from 10 - 25 euros depending on the chosen
                platform.
              </h4>
              <br></br>
            </div>
            <Link to="/PassphraseFactors" className="btn">
              Back
            </Link>
            <Link to="/ChoosingPasswordManager" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordManagers;
