import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ARlebnispfad from "./components/ARlebnispfad";
import AudioController from "./components/AR-components/audioController";
import TextOnHover from "./components/AR-components/TextonHover";
import ChooseMethod from "./components/ChooseMethod";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/arlebnisse" element={<ARlebnispfad />} />
        <Route path="/methoden" element={<ChooseMethod />} />
        <Route path="/erlebnis1" element={<AudioController />} />
        <Route path="/erlebnis2" element={<TextOnHover />} />
      </Routes>
    </Router>
  );
}

export default App;
