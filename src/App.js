import { Route, Switch } from "react-router-dom";
//import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MainNavigation from "./components/layout/MainNavigation";

import Introduction from "./components/introduction-module/Introduction";
import ProductSpecification from "./components/introduction-module/ProductSpecification";
import IAMIntroduction from "./components/introduction-module/IAMIntroduction";

import IntroductionLearn from "./components/learn-module/1. Introduction";

import TradPass from "./components/learn-module/2.1.TraditionalPasswords";
import PasswordWeaknesses from "./components/learn-module/2.2 PasswordWeaknesses";
import PasswordsBreach from "./components/learn-module/2.3 PasswordsBreach";
import Passphrases from "./components/learn-module/2.4 Passphrases";
import CreatePassphrase from "./components/learn-module/2.5 PasswordvsPassphrases";
import PassphraseFactors from "./components/learn-module/2.6 Passphrase - Factors";
import PasswordManagers from "./components/learn-module/2.7 PasswordManagers";
import ChoosePW from "./components/learn-module/2.8 ChoosingPasswordManagers";

import TWOFA from "./components/learn-module/3.0 2FA";
import TWOFASetup from "./components/learn-module/3.1 How to setup 2FA";
import TWOFADirectory from "./components/learn-module/3.3 2FA-Directory";
import TWOFAFactors from "./components/learn-module/3.4 2FA - Factors";

import Biometrics from "./components/learn-module/4. Biometrics";
import Fingerprint from "./components/learn-module/4.1 Fingerprint";
import FingerprintMoreInfo from "./components/learn-module/4.2 Fingerprint-MoreInfo";
import FacialRecognition from "./components/learn-module/4.3 Facial Recognition";
import BiometricFactors from "./components/learn-module/4.4 Biometrics - Factors";

import Conclusion from "./components/learn-module/5. Conclusion";

import Survey from "./components/quiz-module/Survey.js";

import Results from "./components/results-module/Results.js";
import SurveyResponses from "./components/results-module/SurveyResponses";
import SurveyAnalysis from "./components/results-module/SurveyAnalysis.js";

function App() {
  return (
    <div>
      <MainNavigation />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames="alert">
              <Switch>
                {/*       Home    */}
                <Route path="/" exact>
                  <Home text="Awareness Campaign" />
                </Route>
                {/*       Introduction Pages    */}
                <Route path="/introduction">
                  <Introduction text="Introduction" />
                </Route>
                <Route path="/productspecification">
                  <ProductSpecification text="Introduction" />
                </Route>
                <Route path="/IAMIntroduction">
                  <IAMIntroduction text="Introduction" />
                </Route>
                {/*       Learn Pages    */}
                <Route path="/learn">
                  <IntroductionLearn text="Learn" />
                </Route>
                <Route path="/TraditionalPasswords">
                  <TradPass text="Learn" />
                </Route>
                <Route path="/PasswordWeaknesses">
                  <PasswordWeaknesses text="Learn" />
                </Route>
                <Route path="/PasswordsBreach">
                  <PasswordsBreach text="Learn" />
                </Route>
                <Route path="/Passphrases">
                  <Passphrases text="Learn" />
                </Route>
                <Route path="/CreatePassphrase">
                  <CreatePassphrase text="Learn" />
                </Route>
                <Route path="/PasswordManagers">
                  <PasswordManagers text="Learn" />
                </Route>
                <Route path="/PassphraseFactors">
                  <PassphraseFactors text="Learn" />
                </Route>
                <Route path="/ChoosingPasswordManager">
                  <ChoosePW text="Learn" />
                </Route>
                <Route path="/2FA">
                  <TWOFA text="Learn" />
                </Route>
                <Route path="/Setup2FA">
                  <TWOFASetup text="Learn" />
                </Route>
                <Route path="/2FA-Directory">
                  <TWOFADirectory text="Learn" />
                </Route>
                <Route path="/2FAFactors">
                  <TWOFAFactors text="Learn" />
                </Route>
                <Route path="/Biometrics">
                  <Biometrics text="Learn" />
                </Route>
                <Route path="/Fingerprint">
                  <Fingerprint text="Learn" />
                </Route>
                <Route path="/FingerprintMoreInfo">
                  <FingerprintMoreInfo text="Learn" />
                </Route>
                <Route path="/FacialRecognition">
                  <FacialRecognition text="Learn" />
                </Route>
                <Route path="/BiometricFactors">
                  <BiometricFactors text="Learn" />
                </Route>
                <Route path="/Conclusion">
                  <Conclusion text="Learn" />
                </Route>
                {/*       Quiz Pages    */}
                <Route path="/Survey">
                  <Survey text="Quiz" />
                </Route>
                {/*       Results Pages    */}
                <Route path="/Results">
                  <Results text="Results" />
                </Route>
                <Route path="/SurveyResponses">
                  <SurveyResponses text="Results" />
                </Route>
                <Route path="/SurveyAnalysis">
                  <SurveyAnalysis text="Results" />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
