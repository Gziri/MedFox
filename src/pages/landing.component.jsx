import React from "react";
import { useNavigate } from "react-router";
import Card from "../components/UI/card.component";

const LandingPage = () => {
  const navigate = useNavigate();
  const welcomeText = (
    <div className="items-center w-full align-middle flex flex-col select-none">
      <p className="text-xl ">
        კეთილი იყოს თქვენი მობრძანება მედფოქსის ოფიციალურ გვერდზე
      </p>
      <p className="font-bold">თქვენი ჯანმრთელობა ჩვენი პრიორიტეტია</p>
    </div>
  );
  return (
    <div className="h-screen flex flex-col justify-center items-center align-middle">
      <Card opacity={0.8}>{welcomeText}</Card>
      <br />
      <p className="mb-3">მე ვარ</p>
      <div className="flex gap-10   ">
        <button
          className="bg-neutral-200 text-sky-400 font-bold w-32 md:w-32 h-32 rounded-full 
    shadow-lg shadow-stone-300 hover:bg-sky-200 hover:text-orange-500 transition-all"
          onClick={() => navigate("patient")}
        >
          პაციენტი
        </button>
        <button
          className="bg-neutral-200 text-sky-400 font-bold w-32 md:w-32 h-32 rounded-full  
    shadow-lg shadow-stone-300 hover:bg-sky-200 hover:text-orange-500 transition-all "
          onClick={() => navigate("therapist")}
        >
          თერაპევტი
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
