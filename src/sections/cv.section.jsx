import React from "react";
import Card from "../components/UI/card.component";

const CV = () => (
  <Card>
    <div
      className="w-full flex flex-col text-center justify-center items-center"
      id="cv"
    >
      <p className="text-4xl pb-4 text-sky-500">გამოგზავნე CV</p>
      <form
        action="https://formsubmit.co/contact@medfox.ge"
        method="POST"
        className="h-full w-10/12 laptop:w-6/12 flex flex-col  align-middle"
      >
        <input
          type="text"
          id="Therapist_Name"
          name="Therapist_Name"
          className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
          placeholder="სახელი გვარი"
        />

        <input
          type="number"
          id="Mobile_Phone"
          name="Mobile_Phone"
          className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
          placeholder="ტელეფონი"
        />

        <input
          type="file"
          id="CVFile"
          name="CVFile"
          className="border-2 rounded-lg  w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 file:bg-neutral-200 file:border-0 file:rounded file:py-2 my-2"
          placeholder="CV"
        />
      <div className="w-full flex justify-center align-middle">
        <input
          type="submit"
          className="py-2 w-32 bg-neutral-200 rounded-xl 
            hover:bg-sky-400 hover:cursor-pointer hover:text-neutral-50 my-2"
          value="გაგზავნა"
        /></div>
      </form>
    </div>
  </Card>
);

export default CV;
