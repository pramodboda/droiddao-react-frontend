import BrandLogo from "../../assets/images/DroidDao_Logo.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <div className="droiddao-navbar clearfix">
        <div className="droiddao-container">
        <a href="#">
          <div className="brandLogo">
            <img src={BrandLogo} alt="" />
          </div>
        </a>
        <ul className="droiddao-nav">
          <li className="droiddao-nav-item">
            <a href="#">Home</a>
          </li>
          <li className="droiddao-nav-item">
            <a href="#" className="dropdown-toggle">
              Projects
            </a>
            <ul className="droiddao-subnav">
              <li className="droiddao-nav-item ">
                {" "}
                <a href="#"> Create Project</a>
              </li>
              <li className="droiddao-nav-item">
                {" "}
                <a href="#"> Amend Project</a>
              </li>
              <li className="droiddao-nav-item">
                {" "}
                <a href="#"> View Projects</a>
              </li>
            </ul>
          </li>
          <li className="droiddao-nav-item">
            <a href="#">Dorid Launchpad</a>
          </li>
          <li className="droiddao-nav-item">
            <a href="#">Roadmap</a>
          </li>
          <li className="droiddao-nav-item">
            <a href="#">Tokenomics</a>
          </li>
          <li className="droiddao-nav-item">
            <a href="#">Whitepaper</a>
          </li>
          <li className="droiddao-nav-item">
            <a href="#">Contact us</a>
          </li>
        </ul>
        </div>

      </div>
    </div>
  );
}
