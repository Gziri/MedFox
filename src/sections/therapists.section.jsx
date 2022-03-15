import React from "react";
import DATA from "./data";

import Card from "../components/UI/card.component";

import * as Images from "../assets/pics/therapistPics";

/*
 Add modal for therapist resume/extend parent div for text under
*/

const Therapists = (props) => {
  // const imagePath = require("../assets/pics/therapist.jpg");
  const therapists = DATA.therapists.map((t) => (
    <div>
      <div className="text-center mb-4 relative" key={t.key}>
        <div onClick={() => props.therapist(t)} className="flex justify-center">
          <img
            src={Images[t.imageName]}
            alt="therapist"
            className="
          object-cover m-0 p-0 rounded-lg  float-right
          aspect-[1/1] w-52
          [clip-path:circle(40%_at_50%_40%)]
          [shape-outside:circle(40%_at_50%_40%)]"
          />
          <span className="hover:cursor-context-menu absolute top-44">
            {t.name}
          </span>
        </div>
      </div>
    </div>
  ));
  return (
    <Card>
      <h2 id="therapists" className="text-4xl pb-4 text-sky-500">
        ჩვენი თერაპევტები
      </h2>

      <div
        className="flex flex-wrap
        justify-center align-middle items-center rounded-xl gap-x-5  laptop:flex-nowrap"
        id="therapists"
      >
        {therapists}
      </div>
    </Card>
  );
};

export default Therapists;
