import "./LandingPage.css";
import landingPageVideo from "../assets/video/intro-video.mp4";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <h1 className="landingPage-headline">
        <p className="landingPage-headline-capital-letter">AR</p>lebnispfade
      </h1>
      <h1 className="landingPage-sub-headline">Oberbergischer Kreis</h1>
      <div className="landingPage-video-background-group">
        <video autoPlay loop muted playsInline className="landingPageVideo">
          <source src={landingPageVideo} type="video/mp4"></source>
        </video>
        <div className="landingPage-video-fading-background"></div>
      </div>
      <div className="landingPage-choose-cards">
        <Link to="/methoden">
          <button className="landingPage-card-1">
            <p className="landingPage-card-first-line">
              Ich will nur ein bisschen{" "}
            </p>
            <p className="landingPage-card-second-line">stöbern</p>
          </button>
        </Link>
        <Link to="/arlebnisse">
          <button className="landingPage-card-2">
            <p className="landingPage-card-first-line">
              Ich will die ARlebnisse
            </p>
            <p className="landingPage-card-second-line">nutzen</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
