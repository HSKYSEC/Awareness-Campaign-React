import React from "react";
import { Link } from "react-router-dom";

export default function PasswordvsPassphrases() {
  const [name, setName] = React.useState("");
  const handleNameChange = (evt) => {
    const newValue = evt.target.value;
    const newValue1 = newValue.replace("a", "@");
    const newValue2 = newValue1.replace("e", "3");
    const newValue3 = newValue2.replace(" ", "-");
    const newValue4 = newValue3.replace("i", "1");
    const newValue5 = newValue4.replace("o", "0");

    const arr = newValue5.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const stringValue = arr.join(" ");

    setName(stringValue);
  };
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "18%" }}
      >
        <div>
          <h2>Learn</h2>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">How to create a passphrase?</h2>
            <div class="learn-explanation">
              <h4>
                Here are 3 simple ways to construct a secure passphrase:
                <br></br>
                <br></br>
                1. Create a passphrase by taking a short phrase and:
              </h4>
              <h5>
                <p>- Changing the capitalization of some of the letters</p>
                <p>
                  - Replacing some of the letters with numerical and symbolic
                  substitutions.{" "}
                  <a className="important">. (A - 4, E - 3, S - $)</a>
                </p>
                <p>- Misspell or abbreviate some words</p>

                <h4>
                  <table>
                    <tr
                      style={{
                        textAlign: "center",
                        borderBottom: "solid",
                        borderTop: "solid",
                      }}
                    >
                      <td className="important">Example:</td>
                      <td className="important"> "I have a dog named rex"</td>
                      <td className="important"> "I-h@v3-@-dog-n@m3d-r3x"</td>
                    </tr>
                  </table>
                  <br></br>
                </h4>
              </h5>

              <h4>
                2. Choose several shorter words and add some numbers in the
                center, then change the capitalization and substitute symbols
                for letters.
                <br></br>
              </h4>
              <h5>
                <table>
                  <tr
                    style={{
                      textAlign: "center",
                      borderBottom: "solid",
                      borderTop: "solid",
                    }}
                  >
                    <td className="important">Example:</td>
                    <td className="important"> "book 925 GreatGatsby"</td>
                    <td className="important"> "bO()K925GR3@tG@TSBY"</td>
                  </tr>
                </table>
              </h5>
              <br></br>
              <h4>
                3. Choose a memorable quote or phrase and use only the first
                letter from each word. Vary the capitalization. Also include
                numbers and symbols, either as substitutions for letters or as a
                replacement for a full word.
                <br></br>
                <h5>
                  <table>
                    <tr
                      style={{
                        textAlign: "center",
                        borderBottom: "solid",
                        borderTop: "solid",
                      }}
                    >
                      <td className="important">Example:</td>
                      <td className="important" style={{ fontSize: "12px" }}>
                        {" "}
                        "You will always miss 100 percent of the shots that you
                        never take"
                      </td>
                      <td className="important"> "ywAM100%ot$tyN+"</td>
                    </tr>
                  </table>
                </h5>
              </h4>
            </div>
            <div style={{ border: "solid" }}>
              <br></br>
              <h4 style={{ textAlign: "center" }}>
                As an example, you can generate your own passphrase using the
                tool underneath:{" "}
              </h4>
              <div style={{ textAlign: "center", color: "yellow" }}>
                <h4 style={{ textAlign: "center", color: "yellow" }}>
                  Generate Passphrase:
                </h4>
                <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={handleNameChange}
                  style={{ width: "80%" }}
                />

                <h4>{name}</h4>

                <button
                  onClick={() => navigator.clipboard.writeText(name)}
                  className="btn-small"
                >
                  Copy to clipboard
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5>
                  {" "}
                  No inspiration? You can always generate a passphrase on{" "}
                  <a
                    href="https://www.useapassphrase.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    UseAPassphrase.com
                  </a>
                </h5>
              </div>
              <br></br>
              <br></br>
            </div>
            <br></br>
            <Link to="/Passphrases" className="btn">
              Back
            </Link>
            <Link to="/PassphraseFactors" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
