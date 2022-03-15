import React, { useState } from "react";
import Backdrop from "../components/UI/backdrop.component";
import Footer from "../sections/footer.section";
import Intro from "../sections/intro.section";
import RequestService from "../sections/request.section";
import Services from "../sections/services.section";
import Therapists from "../sections/therapists.section";
import TherapistCV from "../sections/therapistCV.section";

const PatientPage = () => {
  const initialState = false;
  const [toggleBackrop, setBackdropState] = useState(initialState);
  const [therapistState, setTherapistState] = useState(initialState);

  const backdropStateHandler = () => {
    setBackdropState(!toggleBackrop);
  };

  const therapistHandler = (chosenTherapistID) => {
    setTherapistState(chosenTherapistID);
    backdropStateHandler();
  };

  return (
    <div className="mt-32">
      <div className="">
        <Intro />
        <Therapists
          toggle={backdropStateHandler}
          therapist={therapistHandler}
        />
        <Services />
        <RequestService />
        <Footer />
        {toggleBackrop ? (
          <TherapistCV toggle={backdropStateHandler} therapist={therapistState} />
        ) : null}
      </div>
    </div>
  );
};

export default PatientPage;
