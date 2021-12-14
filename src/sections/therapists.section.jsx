import React from "react";
import DATA from "./data";

const Therapists = () => {
  const imagePath = require("../assets/pics/therapist.jpg")
  const therapists = DATA.therapists.map((t) => (
    <div className="">
      <img src="https://github.com/Gziri/MedFox/blob/master/src/assets/pics/therapist.jpg" alt="therapist" />
      <a href="/">{t.name}</a>
    </div>
  ));
  return (
    <div className="">
      <div className="mt-6 w-full justify-center flex">
        <div className="w-9/12 bg-neutral-50 p-5 align-middle flex 
        justify-center rounded-xl gap-x-5 ">
          {therapists}
        </div>
      </div>
    </div>
  );
};

export default Therapists;
