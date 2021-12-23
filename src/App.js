import LandingPage from "./pages/landing.component";
import PatientPage from "./pages/patient.component";
import TherapistPage from "./pages/therapist.component";
import Header from "./components/header/header.component";
import backgroundVid from "./assets/videos/main.mp4";

import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="bg-neutral-200 bg-opacity-40 h-full w-screen flex flex-col font-geo">
      <Header />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          "z-index":"-1"
        }}
      >
        <source src={backgroundVid} type="video/mp4" />
      </video>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="patient" element={<PatientPage />} />
        <Route path="therapist" element={<TherapistPage />} />
      </Routes>
    </div>
  );
}

export default App;
