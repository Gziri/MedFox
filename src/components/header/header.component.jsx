import React from "react";
// import Logo from "./logo.component";
import Navigation from "./navigation/navigation.component";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div
      className=" w-full fixed top-0 left-0  px-2 py-3 mb-3
    bg-gray-100 z-50 shadow-lg"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        {/* <div > */}
        <Logo className="w-10 ml-10" />
        <Navigation />
        {/* </div> */}
      </div>
      {/* <div
        className={
          "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Share</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Tweet</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Pin</span>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
