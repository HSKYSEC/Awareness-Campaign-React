import { Link } from "react-router-dom";
import "./MainNavigation.css";
import EYLogo from "../images/lennie.gif";
import EY_Slogan from "../images/index.gif";
import DBLogo from "../images/logodb.png";

function MainNavigation(props) {
  return (
    <header>
      <nav>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">
                {/* <img src={EY_Slogan} alt="logo" class="slogan" /> Home */}{" "}
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/learn">
                <b>Learn</b>
              </Link>
            </li>
            <li>
              <Link to="/Survey">
                <b>Survey</b>
              </Link>
            </li>
            <li>
              <Link to="/Results">
                <b>Results</b>
              </Link>
            </li>
          </ul>
        </div>
        <div id="game" class="flex-center flex-column">
          <div id="logo">
            <img src={DBLogo} alt="logo" class="logo" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
