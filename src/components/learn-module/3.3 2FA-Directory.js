import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

const MFADirectory = (props) => {
  const [tfas, setTfas] = useState([]);
  const [tfa, setTfa] = useState("");

  const handleSubmitTfa = (event) => {
    alert("Your selected value is: " + tfa);
    event.preventDefault();
  };

  const handleChangeTfa = (event) => {
    setTfa(event.target.value);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  useEffect(() => {
    const tfas = require("./tfa.json");
    setTfas(tfas);
  }, []);

  const tfaJSON = require("./tfa.json");
  const filterDropdownTFA = tfas.filter(function (result) {
    return result[0] === tfa;
  });

  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "3%" }}
      >
        <div>
          <h2>{props.text}</h2>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div id="game" class="justify-center ">
            <h2 id="question">2FA Supported Websites</h2>
            <div class="learn-explanation">
              <form onSubmit={handleSubmitTfa}>
                <h4>
                  In case you want to use 2FA authentication, you can find a
                  desired website in the following column. Each website provides
                  the 2FA methodology with the required setup documentation.
                </h4>
                <br />
                <br />

                <h4>
                  Search for websites that support any kind of 2FA
                  Authentication:
                </h4>
                <label>
                  <select
                    value={tfa}
                    onChange={handleChangeTfa}
                    style={{ width: "100%" }}
                  >
                    <option value="" style={{ color: "black" }}>
                      Choose a website
                    </option>
                    {tfaJSON.map((tfa) => (
                      <option
                        key={tfa.id}
                        value={tfa[0].domain}
                        style={{ color: "black" }}
                      >
                        {tfa[0]}
                      </option>
                    ))}
                  </select>
                </label>
                <div>
                  {filterDropdownTFA.map((tfa) => (
                    <div key={tfa.id} style={{ margin: "10px" }}>
                      <h4>
                        <b className="important">Domain: </b>
                        <u
                          onClick={() =>
                            openInNewTab("https://" + tfa[1].domain)
                          }
                        >
                          {tfa[1].domain}
                        </u>
                      </h4>
                      <br></br>
                      <h4>
                        <p>
                          <b className="important">TFA Methods:</b>
                          {" " + tfa[1].tfa + " "}
                        </p>
                      </h4>
                      <br />
                      <h4>
                        <b
                          className="important"
                          style={{ float: "left", marginRight: "1%" }}
                        >
                          Setup documentation:{" "}
                        </b>
                        <u onClick={() => openInNewTab(tfa[1].documentation)}>
                          {tfa[1].documentation}
                        </u>
                      </h4>
                      <br />
                      <h4>
                        <b
                          className="important"
                          style={{ float: "left", marginRight: "1%" }}
                        >
                          Category:{" "}
                        </b>
                        <p>{tfa[1].keywords}</p>
                      </h4>
                    </div>
                  ))}
                </div>
              </form>
            </div>
            <Link to="/Setup2FA" className="btn">
              Back
            </Link>
            <Link to="/2FAFactors" className="btn-right">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MFADirectory;
//ReactDOM.render(<MFADirectory />, document.querySelector("#root"));
