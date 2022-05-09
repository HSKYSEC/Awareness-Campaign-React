import React, { Component } from "react";
import HIBPPasswordChecker from "react-have-i-been-pwned";
import { Link } from "react-router-dom";
import "../learn-module/password.css";

//import "./styles.css";

class Passwords extends Component {
  state = {
    password: "",
  };
  handleChange = (ev) => {
    this.setState({
      password: ev.target.value,
    });
  };
  render() {
    const { password } = this.state;
    return (
      <div>
        <div
          id="game"
          class="flex-center flex-column"
          style={{ marginBottom: "5%" }}
        >
          <div id="logo">
            <h2>Learn</h2>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <div id="game" class="justify-center ">
              <h2 id="question">Password Breaches</h2>
              <div class="learn-explanation">
                <h4>
                  Now that we have defined the disadvantages of using
                  traditional passwords, it would be interesting to know if your
                  passwords have been breached. Using the API of{" "}
                  <a href="https://haveibeenpwned.com/" className="important">
                    haveibeenpwned.com
                  </a>{" "}
                  you can see if your password has been breached in the past.
                </h4>
              </div>
              <div className="App">
                <h3 style={{ textAlign: "center" }}>
                  Type a password to find out if it has been leaked:
                </h3>
                <h5 style={{ fontSize: "10px" }}>
                  *Disclaimer, no personal information will be recorded. This is
                  for personal use. Information contained are publicly available
                  at{" "}
                  <a
                    href="https://haveibeenpwned.com/Passwords"
                    className="important"
                  >
                    haveibeenpwned.com
                  </a>{" "}
                </h5>
                <div class="Input">
                  <input
                    type="password"
                    onChange={this.handleChange}
                    value={password}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div style={{ textAlign: "justify", minHeight: "150px" }}>
                <HIBPPasswordChecker password={password}>
                  {({ initial, loading, error, pwned, count }) => {
                    if (initial) return null;
                    if (loading)
                      return "Checking the security of this password...";
                    if (error) return `error: ${error}`;
                    if (!pwned)
                      return (
                        <>
                          <h4>
                            This password is safe to use and appeared in no
                            known data breaches.{" "}
                            <a
                              href="https://haveibeenpwned.com/FAQs#DataSource"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Learn more
                            </a>
                            .
                          </h4>
                        </>
                      );
                    if (pwned)
                      return (
                        <>
                          <h4>
                            <strong>This password isn't safe to use</strong> and
                            appeared in{" "}
                            <b style={{ color: "red" }}>
                              {count.toLocaleString()} known data breaches.
                            </b>{" "}
                            You can still use it, but you probably shouldn't.{" "}
                            <a
                              href="https://haveibeenpwned.com/FAQs#DataSource"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Learn more
                            </a>
                            .<br></br>
                            <br></br>
                            <u>What is a data breach?</u>
                            <h4>
                              A data breach is an incident where information is
                              stolen or taken from a user without knowledge or
                              authorization. Your password has been compromised
                              in a data breach and it is available online. You
                              should change your password for better
                              alternatives.
                            </h4>
                          </h4>
                        </>
                      );
                  }}
                </HIBPPasswordChecker>
              </div>
              <Link to="/PasswordWeaknesses" className="btn">
                Back
              </Link>
              <Link to="/Passphrases" className="btn-right">
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Passwords;
