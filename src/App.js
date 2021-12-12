import LandingPage from "./pages/landing.component";
import PatientPage from "./pages/patient.component";
import TherapistPage from "./pages/therapist.component";
import Navigation from "./components/header/navigation/navigation.component";

// import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="bg-neutral-200 bg-opacity-40 h-screen w-screen flex flex-col justify-center items-center">
      <Navigation className=""/>
      <LandingPage />
      <PatientPage />
      <TherapistPage />
    </div>
  );
}

export default App;
