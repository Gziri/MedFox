import React from "react";

import Card from "../components/UI/card.component";

const RequestService = () => (
  <Card>
    <div
      className="w-full text-center flex flex-col justify-center align-middle items-center"
      id="request"
    >
      <p className="text-4xl pb-4 text-sky-500">სერვისის მოთხოვნა</p>
      <form
        action="sendCV"
        className="h-full w-10/12 laptop:w-6/12 flex flex-col  align-middle"
      >
        <input
          type="text"
          id="name"
          name="therapistName"
          className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
          placeholder="სახელი გვარი"
        />

        <input
          type="number"
          id="name"
          name="therapistName"
          className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
          placeholder="ტელეფონი"
        />
          <select
            type="select"
            id="service"
            name="therapistName"
            className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
            required
          >
            <option value="physical">ფიზიკური თერაპია</option>
            <option value="massage">მასაჟი</option>
            <option value="physio">ფიზიოთერაპია</option>
            <option value="dist">დისტანციური სერვისები</option>
          </select>
        <input
          type="text"
          id="name"
          name="therapistName"
          className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
          placeholder="როდის დაგიკავშირდეთ?"
        />

        <div className="w-full flex justify-center align-middle">
          <input
            type="submit"
            className="py-2 w-32 bg-neutral-200 rounded-xl 
            hover:bg-sky-400 hover:cursor-pointer hover:text-neutral-50 my-2"
            value="გაგზავნა"
          />
        </div>
      </form>
    </div>
  </Card>
);

export default RequestService;
