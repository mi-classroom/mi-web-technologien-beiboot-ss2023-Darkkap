import "./AudioController.css";
import Arrow from "../../assets/icons/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz48.svg";
import { Link } from "react-router-dom";

function AudioController() {
  return (
    <div className="AudioController">
      <header className="AudioController-header">
        <Link to="/arlebnisse">
          <button className="header-back-button"> 
            <img src={Arrow} alt="Arrow"></img>
          </button>
        </Link>
        <p>Zurück</p>
      </header>
      <main>
        <a-scene>
          <a-cylinder
            id="batsInWild"
            position="0 1 -3"
            radius="0.5"
            height="1.5"
            color="#FFC65D"
            sound="src: url(/sounds/batsInWild.mp3); autoplay: false"
            event-set__enter="_event: mouseenter; _target: #cylinderText, #test; visible: true"
            event-set__leave="_event: mouseleave; _target: #cylinderText; visible: false"
          >
            <a-entity id="cylinderText">
              <a-box
                id="play"
                color="green"
                position="0.4 -0.55 1"
                scale="0.3 0.3 0.3"
                soundcontroller
              ></a-box>
              <a-box
                id="pause"
                color="yellow"
                position="0 -0.55 1"
                scale="0.3 0.3 0.3"
                soundcontroller
              ></a-box>
              <a-box
                id="stop"
                color="red"
                position="-0.4 -0.55 1"
                scale="0.3 0.3 0.3"
                soundcontroller
              ></a-box>
            </a-entity>
          </a-cylinder>
          <a-camera>
            <a-cursor></a-cursor>
          </a-camera>
        </a-scene>
      </main>
    </div>
  );
}

export default AudioController;
