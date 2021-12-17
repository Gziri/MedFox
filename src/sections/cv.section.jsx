import React from "react";
import Card from "../components/UI/card.component";

const CV = () => (
  <Card>
    <div className="w-full flex flex-col text-center justify-center items-center">
      <p className="text-4xl pb-4 text-sky-500">გამოგზავნე CV</p>
      <form
        action="submit"
        className="h-full w-10/12 laptop:w-6/12 flex flex-col  align-middle"
      >
        <label htmlFor="name" className="py-2 w-full flex justify-center items-center relative">
          <input
            type="text"
            id="name"
            name="therapistName"
            className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 "
          />
          <span
            className="text-stone-500 text-opacity-80 absolute 
          left-0 top-4 mx-4 px-2 transition duration-200 input-text
          focus:text-orange-500 "
          >
            სახელი გვარი
          </span>
        </label>

        <label htmlFor="name" className="py-2 w-full flex justify-center items-center relative">
          <input
            type="text"
            id="name"
            name="therapistName"
            className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 "
          />
          <span
            className="text-stone-500 text-opacity-80 absolute 
          left-0 top-4 mx-4 px-2 transition duration-200 input-text
          focus:text-orange-500 "
          >
            ტელეფონი
          </span>
        </label>
        <label htmlFor="name" className="py-2 w-full flex justify-center items-center relative">
    
          <input
            type="file"
            id="CV"
            name="CVFile"
            className="border-2 rounded-lg  w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-40 transition duration-200 file:bg-neutral-200 file:border-0 file:rounded file:py-2"
          />
         
        </label>
      
      </form>
    </div>
  </Card>
);

export default CV;
