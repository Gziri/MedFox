import React from "react";

const Footer = () => (
  <div className="mt-28 align-center shadow-reverse  ">
    <div
      className="w-screen py-7 h-fit bg-neutral-200 flex flex-col text-center align-middle
      text-zinc-800  gap-y-1"
    >
      <div className="w-full flex justify-center">
        <a
          href="tel:595285000"
          className="flex justify-center align-middle hover:text-orange-500"
        >
          <span className="material-icons mr-2">phone</span>
          595285000
        </a>
      </div>
      <div className="w-full flex justify-center">
        <a
          href="mailto:contact@medfox.ge"
          className="flex justify-center align-middle hover:text-orange-500"
        >
          <span className="material-icons mr-2">mail</span>
          contact@medfox.ge
        </a>
      </div>
      <div className="w-full flex justify-center">
        <a
          href="https://fb.com/MedFoxGE"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center align-middle hover:text-orange-500"
        >
          <span className="material-icons mr-2">facebook</span>
          fb.com/MedFoxGE
        </a>
      </div>
      <div className="w-full flex justify-center">
        <a
          href="https://fb.com/MedFoxGE"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center align-middle hover:text-orange-500"
        >
         <span className="iconify mr-3" data-icon="mdi:instagram" data-width="24"></span>
          @medfoxge
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
