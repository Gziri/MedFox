import React from "react";

const Footer = () => (
    <div className="mt-28 align-center ">
      <div
        className="w-screen py-7 h-fit bg-neutral-200 flex flex-col text-center
      text-zinc-800 gap-y-1"
      >
        <a href="tel:595285000" className="flex justify-center align-middle">
          <span className="material-icons mr-2">phone</span>
          595285000
        </a>

        <a
          href="mailto:contact@medfox.ge"
          className="flex justify-center align-middle"
        >
          <span className="material-icons mr-2">mail</span>
          contact@medfox.ge
        </a>

        <a
          href="https://fb.com/MedFoxGE"
          target="_blank"
          className="flex justify-center align-middle"
        >
          <span className="material-icons mr-2">facebook</span>
          fb.com/MedFoxGE
        </a>
      </div>
    </div>
);

export default Footer;
