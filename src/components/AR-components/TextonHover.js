import "./TextOnHover.css";
import Arrow from "../../assets/icons/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz48.svg";
import { Link } from "react-router-dom";

function TextOnHover() {
  return (
    <div className="TextOnHover">
      <header className="TextOnHover-header">
        <Link to="/arlebnisse">
          <button className="header-back-button">
            <img src={Arrow} alt="Arrow"></img>
          </button>
        </Link>
        <p>Bitte wählen Sie einen ARlebnispfad</p>
      </header>
      <main>
        <a-scene>
          <a-cylinder
            position="0 1 -3"
            radius="0.5"
            height="1.5"
            color="#FFC65D"
            event-set__enter="_event: mouseenter; _target: #cylinderText; visible: true"
            event-set__leave="_event: mouseleave; _target: #cylinderText; visible: false"
          >
            <a-text
              id="cylinderText"
              value="Das ist ein Zylinder"
              align="center"
              color="#FFF"
              visible="false"
              position="0 -0.55 0.55"
              geometry="primitive: plane; width: 1.75"
              material="color: #333"
            ></a-text>
          </a-cylinder>

          <a-camera>
            <a-cursor></a-cursor>
          </a-camera>
        </a-scene>
      </main>
    </div>
  );
}

export default TextOnHover;
