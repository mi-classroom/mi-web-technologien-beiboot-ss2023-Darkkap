import "./ARlebnispfad.css";
import Arrow from "../assets/icons/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz48.svg";
import { Link } from "react-router-dom";

function ARlebnispfad() {
  return (
    <div className="ARlebnispfad">
      <header className="header">
        <Link to="/">
          <button className="header-back-button">
            <img src={Arrow} alt="Arrow"></img>
          </button>
        </Link>
        <p>Bitte wählen Sie einen ARlebnispfad</p>
      </header>
      <main className="ARlebnispfad-card-list">
        <Link to="/erlebnis1">
          <div className="ARlebnispfad-card-1">
            <p className="ARlebnispfad-card-text">Wiehl</p>
          </div>
        </Link>
        <Link to="/erlebnis2">
          <div className="ARlebnispfad-card-2">
            <p className="ARlebnispfad-card-text">
              Straße der Arbeit - Marienheide
            </p>
          </div>
        </Link>
          <div className="ARlebnispfad-card-3">
            <p className="ARlebnispfad-card-text">Wipperfürth</p>
          </div>
      </main>
    </div>
  );
}

export default ARlebnispfad;
