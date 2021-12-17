import React from "react";
import DATA from "./data";

/*
 Add modal for therapist resume/extend parent div for text under
*/

const Therapists = () => {
  // const imagePath = require("../assets/pics/therapist.jpg");
  const therapists = DATA.therapists.map((t) => (
    <div className="text-center mb-4  lg:mb-0 md:mb-0" key={t.key}>
      <a href="/">
        <img
          src="https://github.com/Gziri/MedFox/blob/master/src/assets/pics/therapistPics/therapist.jpg?raw=true"
          alt="therapist"
          className="
          object-cover mb-0 rounded-lg object-center aspect-[1/1]
          sm:aspect-[1/2] lg:aspect-[1/2]
          [clip-path:circle(40%_at_50%_40%)]
          [shape-outside:circle(40%_at_50%_40%)]
          "
        />
        <span className="m-0 p-0">{t.name}</span>
      </a>
    </div>
  ));
  return (
    <div className="">
      <div className="mt-6 w-full justify-center flex">
        <div className="w-9/12 bg-neutral-50 p-5 align-middle  text-center">
          <h2 className="text-4xl pb-4 text-sky-500">
            ჩვენი თერაპევტები
          </h2>

          <div
            className="flex flex-wrap
        justify-center rounded-xl gap-x-5  md:flex-nowrap"
          >
            {therapists}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapists;
