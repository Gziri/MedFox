import React from "react";
import DATA from "./data";

/*
 Add modal for therapist resume/extend parent div for text under
*/

const Therapists = () => {
  // const imagePath = require("../assets/pics/therapist.jpg");
  const therapists = DATA.therapists.map((t) => (
    <div className="text-center mb-4 relative" key={t.key}>
      <a href="/" className=" flex justify-center 
           ">
        <img
          src="https://github.com/Gziri/MedFox/blob/master/src/assets/pics/therapistPics/therapist.jpg?raw=true"
          alt="therapist"
          className="
          object-cover m-0 p-0 rounded-lg  float-right
          aspect-[1/1] w-52
          [clip-path:circle(40%_at_50%_40%)]
          [shape-outside:circle(40%_at_50%_40%)]
          
          "
        />
       <p className="hover:cursor-context-menu absolute top-44"> {t.name}</p>
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
        justify-center align-middle items-center rounded-xl gap-x-5  laptop:flex-nowrap"
          >
            {therapists}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapists;
