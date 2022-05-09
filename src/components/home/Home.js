import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div>
      <div id="game" class="flex-center flex-column">
        <div id="logo">
          <h1>{props.text}</h1>
        </div>
      </div>
      <div class="container">
        <div id="home" class="flex-center flex-column">
          <Link to="/introduction" className="btn">
            {" "}
            <b style={{ color: "#2e2e38" }}>Introduction</b>
          </Link>
          <Link to="/learn" className="btn">
            {" "}
            <b style={{ color: "#2e2e38" }}>Learn</b>
          </Link>
          <Link to="/Survey" className="btn">
            {" "}
            <b style={{ color: "#2e2e38" }}>Survey</b>
          </Link>
          <Link to="/results" className="btn">
            {" "}
            <b style={{ color: "#2e2e38" }}>Results</b>
          </Link>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default Home;
