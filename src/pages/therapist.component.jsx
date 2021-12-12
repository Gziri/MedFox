import React from "react";
import CV from "../sections/cv.section";
import Footer from "../sections/footer.section";
import Intro from "../sections/intro.section";
import Offers from "../sections/offers.section";
import Therapists from "../sections/therapists.section";

const TherapistPage = () => (
  <div className="">
    <p>Therapist Page</p>
    <div className="text-red-600">
      <Intro />
      <Therapists />
      <Offers />
      <CV />
      <Footer />
    </div>
  </div>
);

export default TherapistPage;
