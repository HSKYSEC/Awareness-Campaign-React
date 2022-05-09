import React from "react";
import { Link } from "react-router-dom";
import "./learn.css";

const Passphrases = (props) => {
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
            <h2 id="question">Passphrases</h2>
            <div class="learn-explanation">
              <h4>
                A first alternative for insecure passwords are Passphrases. Both
                are made of words and mixed up with letters and characters, but
                the biggest difference is how they are built. A password is
                known to be only <u>one</u> or <u>two words</u>. While a
                passphrase is an <u>entire phrase</u> that is made out of four
                to ten words.
              </h4>
              <h4>
                <u>
                  <i>
                    <b>Should you use passphrases instead of passwords?</b>
                  </i>
                </u>
                <br></br>
                <br></br>
                Even if dozens of random password generators exist for you to
                use, they certainly are secure, but they are very hard to
                remember. Passphrases break this barrier by providing a
                combination of <b class="important">memorability</b> &{" "}
                <b class="important">security</b>.
              </h4>
              <br></br>
              <h4>
                Example:
                <table>
                  <tr>
                    <th style={{ color: "yellow", textAlign: "center" }}>
                      Password/Passphrases
                    </th>
                    <th style={{ color: "yellow", textAlign: "center" }}>
                      Time to guess
                    </th>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>Rex24/03/2018</td>
                    <td>Approximately 5,000,000 centuries</td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>p%9y#k&yFm?</td>
                    <td>Approximately 90,182,663 centuries</td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>logic finite eager ratio </td>
                    <td>Approximately 189,658,722 centuries</td>
                  </tr>
                </table>
                <br></br>
                <h5>
                  <p className="important">
                    <b>
                      <u>*Time to guess</u>
                    </b>{" "}
                    is defined by the computing power, in case a threat actor is
                    involved the time to guess will drastically decrease.
                  </p>
                </h5>
              </h4>
            </div>
            <Link to="/PasswordsBreach" className="btn">
              Back
            </Link>
            <Link to="/CreatePassphrase" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passphrases;
