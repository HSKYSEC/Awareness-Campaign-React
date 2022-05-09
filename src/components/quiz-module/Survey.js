import React, { Component } from "react";
import Button from "@material-ui/core/Button";

var firebase = require("firebase");
var uuid = require("uuid");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK9YK9JQc1T9zrsjkaQmk1IoME0WYvE_0",
  authDomain: "awarenesscampaign-478f2.firebaseapp.com",
  databaseURL:
    "https://awarenesscampaign-478f2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "awarenesscampaign-478f2",
  storageBucket: "awarenesscampaign-478f2.appspot.com",
  messagingSenderId: "89771672180",
  appId: "1:89771672180:web:405e82de344511b8424721",
  measurementId: "G-TK0ZM6GBMD",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class Survey extends Component {
  handleradio = (e) => {
    e.preventDefault();
    this.setState({ checked: !this.state.checked });
  };

  eMailSubmit(event) {
    var name = this.refs.name.value;
    this.setState({ eMail: name }, function () {
      console.log(this.state);
    });
  }

  surveySubmit(event) {
    firebase
      .database()
      .ref("Survey/" + this.state.uid)
      .set({
        eMail: this.state.eMail,
        answers: this.state.answers,
      });
    this.setState({ isSubmitted: true });
  }

  answerSelected(event) {
    var answers = this.state.answers;

    if (event.target.name === "ans1") {
      answers.ans1 = event.target.value;
    } else if (event.target.name === "ans2") {
      answers.ans2 = event.target.value;
    } else if (event.target.name === "ans3") {
      answers.ans3 = event.target.value;
    } else if (event.target.name === "ans4") {
      answers.ans4 = event.target.value;
    } else if (event.target.name === "ans5") {
      answers.ans5 = event.target.value;
    } else if (event.target.name === "ans6") {
      answers.ans6 = event.target.value;
    } else if (event.target.name === "ans7") {
      answers.ans7 = event.target.value;
    } else if (event.target.name === "ans8") {
      answers.ans8 = event.target.value;
    } else if (event.target.name === "ans9") {
      answers.ans9 = event.target.value;
    } else if (event.target.name === "ans10") {
      answers.ans10 = event.target.value;
    } else if (event.target.name === "ans11") {
      answers.ans11 = event.target.value;
    } else if (event.target.name === "ans12") {
      answers.ans12 = event.target.value;
    } else if (event.target.name === "ans13") {
      answers.ans13 = event.target.value;
    } else if (event.target.name === "ans14") {
      answers.ans14 = event.target.value;
    } else if (event.target.name === "ans15") {
      answers.ans15 = event.target.value;
    } else if (event.target.name === "ans16") {
      answers.ans16 = event.target.value;
    }

    this.setState({ answers: answers }, function () {
      console.log(this.state);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      uid: uuid.v1(),
      eMail: "",
      answers: {
        ans1: "",
        ans2: "",
        ans3: "",
        ans4: "",
        ans5: "",
        ans6: "",
        ans7: "",
        ans8: "",
        ans9: "",
        ans10: "",
        ans11: "",
        ans12: "",
        ans13: "",
        ans14: "",
        ans15: "",
        ans16: "",
      },
      isSubmitted: false,
    };

    this.eMailSubmit = this.eMailSubmit.bind(this);
    this.surveySubmit = this.surveySubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
  }
  render() {
    var name = "";
    var questions = "";

    if (this.state.eMail === "" && this.state.isSubmitted === false) {
      name = (
        <div>
          <div id="game" class="flex-center flex-column">
            <div id="logo">
              <h2>Survey</h2>
            </div>
          </div>

          <div class="card">
            <div class="container">
              <div
                id="game"
                class="justify-center flex-center flex-column"
                style={{ marginBottom: "-15%" }}
              >
                <h4 class="learn-explanation">
                  Dear participants,
                  <br></br>
                  <br></br>I want to thank you for participating in my awareness
                  campaign around authentication. I hope you gained some
                  knowledge about alternative authentication methods. As of
                  ending the awareness campaign, I would like you to perform a
                  final survey about the awareness campaign. The survey consists
                  of 16 questions and will require no more than 3 minutes.
                  <br></br>
                  <br></br>
                  In case you want to be informed about the results of the
                  survey, provide us with your email. You will be notified
                  whenever the results are available !
                </h4>
                <h2> Enter your email: </h2>
                <h4> *Personal information won't be showed during results</h4>
                <form>
                  <input
                    className="input1"
                    type="email"
                    placeholder="Enter email"
                    ref="name"
                    defaultValue="example@example.com"
                  />
                </form>
                <br></br>
                <Button
                  class="btn"
                  style={{ backgroundColor: "#2e2e38" }}
                  onClick={this.eMailSubmit}
                >
                  Start Survey
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.eMail !== "" && this.state.isSubmitted === false) {
      questions = (
        <div>
          <div id="game" class="flex-center flex-column">
            <div class="card">
              <div class="container" style={{ height: "10vh" }}>
                <div
                  id="game"
                  class="justify-center"
                  style={{ marginTop: "0%" }}
                ></div>
              </div>
              <br></br>
              <br></br>
              <form onSubmit={this.surveySubmit}>
                <div className="card">
                  <h3
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <br></br>
                    <u>
                      <b className="important">Survey</b>
                    </u>
                  </h3>
                  <h4 className="importantsurvey">What is your gender?</h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans1"
                        value="Other"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text" data-number="1">
                      Man
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans1"
                        value="Female"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Female</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans1"
                        value="Other"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Other</p>
                  </div>
                </div>
                <div className="card">
                  <h3
                    style={{
                      textAlign: "center",
                    }}
                  ></h3>
                  <h4 className="importantsurvey">Age Group</h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans2"
                        value="<18"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text" data-number="1">
                      Under 18
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans2"
                        value="18 - 25"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">18 - 25</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans2"
                        value="26 - 40"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">26 - 40</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans2"
                        value="40 - 65"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">40 - 65</p>
                  </div>

                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans2"
                        value="65+"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">65+</p>
                  </div>
                </div>

                <div className="card">
                  <h3
                    style={{
                      textAlign: "center",
                    }}
                  ></h3>
                  <h4 className="importantsurvey">
                    On average, how often do you change your (non-business)
                    passwords ?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans3"
                        value="<18"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text" data-number="1">
                      Under 3 months
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans3"
                        value="18 - 25"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Once every 6 months</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans3"
                        value="26 - 40"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Once a year</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans3"
                        value="40 - 65"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">More than once a year</p>
                  </div>

                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans3"
                        value="65+"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">
                      Whenever my password gets compromised
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans3"
                        value="Never"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Never</p>
                  </div>
                </div>

                <div className="card">
                  <h3
                    style={{
                      textAlign: "center",
                    }}
                  ></h3>
                  <h4 className="importantsurvey">
                    What techniques do you use to remember your passwords?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans4"
                        value="<18"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text" data-number="1">
                      Write it down
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans4"
                        value="18 - 25"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Document on my computer</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans4"
                        value="26 - 40"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Memorization</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans4"
                        value="40 - 65"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Password Managers</p>
                  </div>

                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans4"
                        value="65+"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Mnemoic technique</p>
                  </div>
                </div>

                <div className="card">
                  <h3
                    style={{
                      textAlign: "center",
                    }}
                  ></h3>
                  <h4 className="importantsurvey">
                    Do you reuse the same password on multiple websites ?{" "}
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans5"
                        value="<18"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text" data-number="1">
                      Always
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans5"
                        value="18 - 25"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Often</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans5"
                        value="26 - 40"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">Never</p>
                  </div>
                </div>
                <div className="card">
                  <h3
                    style={{
                      textAlign: "center",
                    }}
                  ></h3>
                  <h4 className="importantsurvey">
                    How many different passwords do you have?{" "}
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans6"
                        value="<18"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text" data-number="1">
                      1 - 3
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans6"
                        value="18 - 25"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">4 - 6</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans6"
                        value="26 - 40"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">7 - 10</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans6"
                        value="26 - 40"
                        onChange={this.answerSelected}
                        required
                      />
                    </p>
                    <p class="choice-text">10+</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="importantsurvey">
                    Which factors are you considering when defining a password?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans7"
                        value="Passphrases"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Site Requirements</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans7"
                        value="Password Managers"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Ease of Memorization</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans7"
                        value="Two-Factor Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Strength & Security</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans7"
                        value="Biometric Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Other</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="importantsurvey">
                    Password Length (Characters)
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans8"
                        value="Passphrases"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">5 - 7</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans8"
                        value="Password Managers"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">8 - 10</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans8"
                        value="Two-Factor Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">11 - 13</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans8"
                        value="Biometric Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">14 - 16</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans8"
                        value="No Prior Knowledge"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">16+</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="importantsurvey">
                    Have your passwords ever been compromised?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans9"
                        value="Passphrases"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Yes</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans9"
                        value="Password Managers"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">No</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="importantsurvey">
                    How did your password get compromised?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans10"
                        value="Passphrases"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Malware/Spyware</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans10"
                        value="Password Managers"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Phishing (Website/Email)</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans10"
                        value="Two-Factor Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Data Breach</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans10"
                        value="Biometric Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Other</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="importantsurvey">
                    What did you do against it?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans11"
                        value="Passphrases"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">
                      I changed my password with a similar password
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans11"
                        value="Password Managers"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">
                      I changed my password with a better password
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans11"
                        value="Two-Factor Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">
                      I changed my authentication methodology
                    </p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans11"
                        value="Biometric Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Other</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="importantsurvey">
                    Are you using one of the following authentication
                    methodologies?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans12"
                        value="Passphrases"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Passphrases</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans12"
                        value="Password Managers"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Password Managers</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans12"
                        value="Two-Factor Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Two-Factor Authentication</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans12"
                        value="Biometric Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Biometric Authentication</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans12"
                        value="No Prior Knowledge"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">No prior knowledge</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="importantsurvey">
                    What is the reason to choose this method of authentication
                    over another?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans13"
                        value="Passphrases"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Superior Security</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans13"
                        value="Password Managers"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Simplicity</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans13"
                        value="Two-Factor Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Fast</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans13"
                        value="Biometric Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Compatibility</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans13"
                        value="No Prior Knowledge"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Low Cost</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans13"
                        value="No Prior Knowledge"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Other</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans13"
                        value="No Prior Knowledge"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">No prior knowledge</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="importantsurvey">
                    What is the reason for not using one of the cited
                    authentication methodologies?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans14"
                        value="Passphrases"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Complexity</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans14"
                        value="Password Managers"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Lack of Familiarity</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans14"
                        value="Two-Factor Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Time Consuming</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans14"
                        value="Biometric Authentication"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Implementation Cost</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans14"
                        value="No Prior Knowledge"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Other</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="importantsurvey">
                    Would you be interested in learning more about the different
                    authentication methodologies?
                  </h4>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      {" "}
                      <input
                        type="radio"
                        name="ans15"
                        value="Passphrases"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">Yes</p>
                  </div>
                  <div class="choice-container">
                    <p class="choice-prefix">
                      <input
                        type="radio"
                        name="ans15"
                        value="Password Managers"
                        onChange={this.answerSelected}
                      />
                    </p>
                    <p class="choice-text">No</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card">
                    <h4 className="importantsurvey">
                      How would you rate the awareness campaign?
                    </h4>
                    <div class="choice-container">
                      <p class="choice-text" data-number="1">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          name="ans16"
                          style={{ width: "600%" }}
                          defaultValue="5"
                          onChange={this.answerSelected}
                        />
                      </p>
                    </div>
                    <p style={{ float: "right" }}>
                      <b className="important">10</b>
                    </p>
                    <p style={{ float: "left" }}>
                      <b className="important">1</b>
                    </p>
                  </div>
                </div>
                <input
                  className="btn"
                  type="submit"
                  value="Send Survey"
                  style={{ marginTop: "3%" }}
                ></input>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (this.state.eMail !== "" && this.state.isSubmitted === true) {
      name = (
        <div>
          <div class="container">
            <div
              id="game"
              class="justify-center "
              style={{ marginBottom: "15%" }}
            >
              <div
                className="card"
                style={{ border: "solid 2px", color: "yellow", padding: "5px" }}
              >
                <h4>
                  Dear participants,
                  <br></br>
                  <br></br>
                  Thank you for participating in the survey around
                  authentication. Your effort is greatly appreciated. The
                  results of the survey will be analyzed as soon as everyone has
                  filled out the survey and an email with the results will then
                  be sent to you shortly after.
                  <h4>
                    <br></br>
                    Greetings <br></br>
                    Diego Borghgraef - Information Management & Security
                  </h4>
                </h4>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {name}
        {questions}
      </div>
    );
  }
}

export default Survey;
