import LandingPage from "./pages/landing.component";
import PatientPage from "./pages/patient.component";
import TherapistPage from "./pages/therapist.component";
import Header from "./components/header/header.component";

import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="bg-neutral-200 bg-opacity-40 h-screen w-screen flex flex-col justify-center items-center">
      <Header className="" />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="patient" element={<PatientPage />} />
        <Route path="therapist" element={<TherapistPage />} />
      </Routes>
    </div>
  );
}

export default App;
