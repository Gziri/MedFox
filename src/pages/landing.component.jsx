import React from "react";

const LandingPage = () => (
  <div className="text-center">
    <p className="">მე ვარ</p>
    <button
      className="bg-neutral-200 text-sky-400 font-bold w-32 md:w-32 h-32 rounded-full 
    shadow-lg shadow-stone-300 hover:bg-sky-200 hover:text-orange-500"
    >
      პაციენტი
    </button>
    <button
      className="bg-neutral-200 text-sky-400 font-bold w-32 md:w-32 h-32 rounded-full ml-20 
    shadow-lg shadow-stone-300 hover:bg-sky-200 hover:text-orange-500 hover:animate-bounce"
    >
      თერაპევტი
    </button>
  </div>
);

export default LandingPage;
