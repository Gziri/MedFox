import React from "react";
import CV from "../sections/cv.section";
import Footer from "../sections/footer.section";
import Intro from "../sections/intro.section";
import Offers from "../sections/offers.section";
import Therapists from "../sections/therapists.section";

const TherapistPage = () => (
  <div className="mt-32">
    <div>
      <Therapists />
      <Offers />
      <CV />
      <Footer />
    </div>
  </div>
);

export default TherapistPage;
