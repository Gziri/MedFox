import React from "react";
import Footer from "../sections/footer.section";
import Intro from "../sections/intro.section";
import RequestService from "../sections/request.section";
import Services from "../sections/services.section";
import Therapists from "../sections/therapists.section";

const PatientPage = () => (
  <div className="mt-10">
    <div className="">
      <Intro/>
      <Therapists/>
      <Services/>
      <RequestService/>
      <Footer/>
    </div>
  </div>
);

export default PatientPage;
