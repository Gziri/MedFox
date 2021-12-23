import React from "react";
import { useLocation } from "react-router";
import {Link} from 'react-scroll';

const Navigation = () => {
  const location = useLocation();

  if (location.pathname === "/patient") {
    return (
      <div className="flex justify-evenly">
        <Link to="therapists" smooth={true} duration={1000} offset={-100} className="mr-3 cursor-pointer">
          ჩვენი თერაპევტები
        </Link>
        <Link to="services" smooth={true} duration={1000} offset={-100} className="mr-3 cursor-pointer">
          სერვისები
        </Link>
        
        <Link to="request" smooth={true} duration={1500} offset={-100} className="cursor-pointer">სერვისის მოთხოვნა</Link>
      </div>
    );
  } else if(location.pathname === "/therapist") {
    return (
      <div className="flex justify-evenly">
         <Link to="therapists" smooth={true} duration={1000} offset={-100} className="mr-3 cursor-pointer">
          ჩვენი თერაპევტები
        </Link>
        <Link to="offers" smooth={true} duration={1000} offset={-100} className="mr-3 cursor-pointer">
          შეთავაზებები
        </Link>
        <Link to="cv" smooth={true} duration={1500} offset={-100} className="mr-3 cursor-pointer">
          CV
        </Link>
      </div>
    );
  }else{return <div></div>}
};

export default Navigation;
