import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";
import SMS2FA from "../images/SMS2FA.jpg";
import GoogleAuth from "../images/GoogleAuth.jpg";
import Keys2FA from "../images/Keys2FA.jpg";

const MFA = (props) => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "33%" }}
      >
        <div id="logo">
          <h2>{props.text}</h2>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">Two-Factor Authentication</h2>
            <div class="learn-explanation">
              <h4>
                The problem with the previously mentioned authentications is
                that each one of them has{" "}
                <b className="important"> a single point of failure</b> meaning
                that a threat actor only needs 1 means of authentication to
                access someone's personal identity. Implementing Two-Factor
                Authentication brings in an extra layer of security, meaning
                another piece of information is required when identifying on a
                website. This second piece of information is usually a temporary
                code delivered by a device in your possession, such as a phone.
                <br></br>
                <br></br>
                <h3 className="important">Why should you implement 2FA?</h3>
                <p style={{ float: "left", marginBottom: "3%" }}>
                  As previously mentioned, password breaches happen more often
                  than you think. By using a single point of authentication you
                  are very vulnerable to account hijacking. Threat actors can
                  guess your predictable password, find leaked passwords or you
                  can be a victim of a phishing attack. By implementing 2FA you
                  can drastically decrease the likelihood of your personal
                  identity being hijacked, as users will need to have access to
                  two 2 means of authentication
                </p>
                <h4 className="important">2FA Approaches</h4>
                <p>
                  2FA can be implemented in multiple ways. All approaches
                  provide a good alternative, but each one of them has unique
                  considerations for{" "}
                  <a className="important">security & convenience:</a>
                </p>
                <br></br>
                <p style={{ float: "left", marginBottom: "3%" }}>
                  <p>
                    <b>SMS 2FA:</b>
                  </p>{" "}
                  <img
                    src={SMS2FA}
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
                  2FA can be implemented with the use of regular old text
                  messages. Before logging in you will receive a short
                  confirmation code on your mobile device. When prompted during
                  login, you should enter the code.
                </p>
                <p style={{ float: "left", marginBottom: "5%" }}>
                  <p>
                    <b>TOTP Authenticator Apps:</b>
                  </p>{" "}
                  <img
                    src={GoogleAuth}
                    alt="logo"
                    className="img1"
                    style={{
                      textAlign: "left",
                      width: "35%",
                      margin: "auto",
                      float: "left",
                      marginRight: "3%",
                      borderRadius: "10px 10px 10px 10px",
                    }}
                  />
                  A better 2FA alternative are Time-based One Time Passwords
                  (TOTP) authenticators. You will receive your temporary login
                  code using authenticator apps. Multiple authentication
                  applications to choose from:
                  <p className="important">
                    Google Authenticator, Microsoft Authenticator, Authy
                  </p>
                </p>
                <p style={{ textAlign: "center", marginBottom: "5%" }}>
                  <b>
                    The above options provide secure authentication but are
                    still vulnerable to fraudulent websites that intercept 2FA
                    authentication codes.
                  </b>
                </p>
              </h4>
              <h4>
                <p style={{ float: "left", marginBottom: "3%" }}>
                  <p>
                    <b>2FA Security Keys:</b>
                  </p>{" "}
                  <img
                    src={Keys2FA}
                    alt="logo"
                    className="img1"
                    style={{
                      textAlign: "left",
                      width: "20%",
                      margin: "auto",
                      float: "right",
                      marginLeft: "3%",
                      borderRadius: "10px 10px 10px 10px",
                    }}
                  />
                  Right now, security keys are the most secure option for 2FA
                  authentication but at cost of the convenience. A security key
                  is a physical USB device you can use to authenticate your
                  account. When prompted with 2FA Credentials, instead of typing
                  a code, you have to insert your security key and physically
                  tap it when prompted with a login.
                </p>
                <p style={{}}>
                  Security keys are resistant to phishing attacks, making them
                  one of the best options on the market. Unlike code-based 2FA,
                  phishing websites don't have a way to intercept your security
                  key. The only concern is that you always have to bring your
                  Security key to authenticate which goes against the user's
                  convenience.
                </p>
              </h4>
            </div>
            <Link to="/ChoosingPasswordManager" className="btn">
              Back
            </Link>
            <Link to="/Setup2FA" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFA;
