import "./HeroSection.css";
import Typography from "@mui/material/Typography";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import HeroBlobs from "../../assets/images/hero-blobs-bg.png";
import HeroRightShape1 from "../../assets/images/hero-right-shape1a copy.png";

// import Box from "@mui/material/Box";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="droiddao-container">
        <div className="left-content">
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: "30px" }}
          >
            DROID DAO is here to maximize the potential for investment
            opportunities via synergy-driven efficient platform.
          </Typography>

          <Typography
            variant="h6"
            component="h6"
            sx={{ mb: "30px" }}
            className="description"
          >
            We bring handpicked projects to your doorstep and you are just one
            click away to be part of our journey.
            <br />
            It is a defi DAO investment city, that never sleeps - So come join
            us and DROID DAO would be your ultimate choice for investment
            portal!
          </Typography>
          {/* <button>Create Project</button> */}
          <button class="pushable">
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front">
              <span>
                <RocketLaunchIcon />
              </span>
              <span>Create Project</span>
            </span>
          </button>
        </div>
        <div className="hero-right-shapes1-container">
          <img
            src={HeroRightShape1}
            alt="hero right shapes1"
            className="hero-right-shapes1"
          />
        </div>
        <div className="hero-blobs-bg-container">
          <img src={HeroBlobs} alt="hero blobs bg" className="hero-blobs-bg" />
        </div>
      </div>
    </div>
  );
}
