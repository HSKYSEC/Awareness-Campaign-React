import React from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";

const ProductSpecification = (props) => {
  return (
    <div>
      <div id="game" class="flex-center flex-column">
        <div id="logo">
          <h2>{props.text}</h2>
        </div>
      </div>
      <div class="container">
        <div class="card">
          <div
            id="game"
            class="flex-center flex-column"
            style={{ marginTop: "15%" }}
          >
            <div>
              <h4>The course is divided in 3 modules:</h4>
              <h3 className="important">1. Learn Module</h3>
              <h4>
                During the learning module, you will have a brief explanation of
                all authentication methodologies. You will learn more about the
                advantages/disadvantages and be able to interactively work with
                each one of them. The goal is for users to get awareness of
                better password alternatives.
              </h4>
              <h3 className="important">2. Survey Module</h3>
              <h4>
                With the knowledge acquired in the previous module, I will ask
                you to fill in a survey about authentication. The survey is part
                of an analysis for my bachelor thesis, where questions about
                authentication preferences will be examined and compared against
                each other.
              </h4>
              <h3 className="important">3. Results Module</h3>
              <h4>
                The last part will consist of a statistical analysis of all the
                results that have been submitted. An overview of all the
                submitted questions will be compared. <br></br>
                <a className="important">
                  This module will be only available when all the information is
                  processed.
                </a>
                <h4></h4>
              </h4>
            </div>
          </div>
          <Link to="/introduction" className="btn">
            Back
          </Link>
          <Link to="/learn" className="btn-right">
            Start learning !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
