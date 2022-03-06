import "./ProjectCard.css";

import Chip from "@mui/material/Chip";

export default function ProjectCard(props) {
  const cardType = props.cardType;
  return (
    <div
      className={`project-card ${
        props.cardType === "live" ? "live-project-card" : ""
      } ${props.cardType === "closed" ? "closed-project-card" : ""}`}
    >
      <div className="project-card__header">
        {/* <img src="https://bullperks.com/wp-content/uploads/2022/01/Group-10.png" alt=""> */}

        <div className="project-card__logo">
          <div className="project-card__info__row">
            <div className="project-info-label">
              <Chip size="small" color="default" label="BSC" />
            </div>
            <div className="project-info-value">
              {props.cardType === "live" ? (
                <Chip size="small" color="success" label="Live" />
              ) : (
                ""
              )}
              {props.cardType === "closed" ? (
                <Chip size="small" color="error" label="Closed" />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="project-card__content">
        <div className="project-card__info">
          {/* <div class="project-card__info__row">
            <div class="project-info-label">Network</div>
            <div class="project-info-value token-currency token-currency-bnb_chain">
              BNB Chain
            </div>
          </div> */}

          <div className="project-card__info__row">
            <div className="project-info-label">Type</div>
            <div className="project-info-value">IDO</div>
          </div>

          <div className="project-card__info__row">
            <div className="project-info-label">Launch Date</div>
            <div className="project-info-value">15 Mar 2022</div>
          </div>
          <div className="project-card__info__row">
            <div className="project-info-label">End Date</div>
            <div className="project-info-value">30 Mar 2022</div>
          </div>
          <div className="project-card__info__row">
            <div className="project-info-label">Min Allocation</div>
            <div className="project-info-value">20 USD</div>
          </div>
          <div className="project-card__info__row">
            <div className="project-info-label">Max Allocation</div>
            <div className="project-info-value">TBA</div>
          </div>
          <div className="project-card__info__row">
            <div className="project-info-label">Token Price</div>
            <div className="project-info-value">$ 0.02</div>
          </div>
          <div className="project-card__info__row">
            <div className="project-info-label">Total Raise:</div>
            <div className="project-info-value">3000 BETB</div>
          </div>
        </div>
        <button class="pushable">
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">
            <span>{/* <RocketLaunchIcon /> */}</span>
            <span>Join Deal</span>
          </span>
        </button>
      </div>
    </div>
  );
}
