import "./HeroSection.css";
import Typography from "@mui/material/Typography";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

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

          <Typography variant="p" component="p" sx={{ mb: "30px" }}>
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
      </div>
    </div>
  );
}
