import ListItemIcon from "@mui/material/ListItemIcon";

import BrandLogo from "../../assets/images/DroidDao_Logo.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./FooterSection.css";

export default function FooterSection() {
  return (
    <div className="footer-section clearfix">
      <div className="droiddao-container">
        <div className="brandLogo">
          <img src={BrandLogo} alt="brandLogo" />
        </div>
        <Box sx={{ mb: "20px" }}>
          <ul className="footer-section__nav clearfix">
            <li>
              <a href="#">About Droid</a>
            </li>
            <li>
              <a href="#">Projects </a>
            </li>
            <li>
              <a href="#">Droid Launchpad</a>
            </li>
            <li>
              <a href="#">Whitepaper</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </Box>

        <Box sx={{ color: "#f9f9f9", textTransform: "uppercase", mb: "20px" }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ color: "#f9f9f9", textTransform: "uppercase", mb: "20px" }}
          >
            Stay in touch
          </Typography>
          <Box
            sx={{
              "& > :not(:last-child)": {
                mr: "15px",
              },
            }}
          >
            <Link href="#">
              <FacebookIcon sx={{ color: "#1877F2" }} />
            </Link>
            <Link href="#">
              <TwitterIcon sx={{ color: "#1DA1F2" }} />
            </Link>
            <Link href="#">
              <LinkedInIcon sx={{ color: "#0077b5" }} />
            </Link>
          </Box>
        </Box>
        <Typography variant="p" component="p" sx={{ color: "#999" }}>
          &copy; 2022 Droid, All rights reserved.
        </Typography>
      </div>
    </div>
  );
}
