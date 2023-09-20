import "./ChooseMethod.css";
import Arrow from "../assets/icons/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz48.svg";
import Radar from "../assets/icons/radar_FILL0_wght400_GRAD0_opsz48.svg";
import QR from "../assets/icons/qr_code_scanner_FILL0_wght400_GRAD0_opsz48.svg";
import Help from "../assets/icons/help_FILL0_wght400_GRAD0_opsz48.svg";
import { Link } from "react-router-dom";

function ChooseMethod() {
  return (
    <div className="ChooseMethod">
      <header className="header">
        <Link to="/">
          <button className="header-back-button">
            <img src={Arrow} alt="Arrow"></img>
          </button>
        </Link>
        <p>Wie wollen Sie starten?</p>
      </header>
      <main className="ChooseMethod-card-list">
          <div className="ChooseMethod-card-1">
            <img className="ChooseMethod-icon" src={Radar} alt="Radar"></img>
            <p className="ChooseMethod-card-text">
              ARlebnisse in der Umgebung anzeigen
            </p>
          </div>
        <div className="ChooseMethod-card-2">
          <img className="ChooseMethod-icon" src={QR} alt="QR"></img>
          <p className="ChooseMethod-card-text">
            Arlebnis via QR Code Scan starten
          </p>
        </div>
        <div className="ChooseMethod-card-3">
          <img className="ChooseMethod-icon" src={Help} alt="Help"></img>
          <p className="ChooseMethod-card-text">Ich habe keine Ahnung</p>
        </div>
      </main>
    </div>
  );
}

export default ChooseMethod;
