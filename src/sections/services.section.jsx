import React from "react";
import ReactHtmlParser from "react-html-parser";

import Card from "../components/UI/card.component";
import DATA from "./data";

const Services = () => {
  const services = DATA.services.map((service) => {
    if (service.side == "l") {
      return (
        <div className="flex align-middle">
             <img
          src="https://physiomobile.ca/wp-content/uploads/2016/03/Pageservice2.jpg"
          alt="serviceImage"
          className="w-6/12 rounded-xl"
        />
        <div
          className="flex flex-col justify-center 
          px-24"
        >
          <h1 className="text-center mb-20">
            <p
              className="text-5xl text-sky-500 underline underline-offset-3 
              decoration-orange-200"
            >
              {service.name}
            </p>
          </h1>
          <p className="text-gray-500 indent-5">
            {ReactHtmlParser(service.description.main)}
          </p>
          <br />
          <p className="font-bold text-gray-600">
            {ReactHtmlParser(service.description.listTitle)}
          </p>
          <br />
          <ul className="list-disc list-inside text-gray-800">
            {ReactHtmlParser(service.description.list)}
          </ul>
          <br />
          <p className="text-gray-500">
            {ReactHtmlParser(service.description.last)}
          </p>
        </div>
     
      </div>
      );
    }
    return (
      <div className="flex align-middle">
        <div
          className="flex flex-col justify-center 
          px-24"
        >
          <h1 className="text-center mb-20">
            <p
              className="text-5xl text-sky-500 underline underline-offset-3 
              decoration-orange-200"
            >
              {service.name}
            </p>
          </h1>
          <p className="text-gray-500 indent-5">
            {ReactHtmlParser(service.description.main)}
          </p>
          <br />
          <p className="font-bold text-gray-600">
            {ReactHtmlParser(service.description.listTitle)}
          </p>
          <br />
          <ul className="list-disc list-inside text-gray-800">
            {ReactHtmlParser(service.description.list)}
          </ul>
          <br />
          <p className="text-gray-500">
            {ReactHtmlParser(service.description.last)}
          </p>
        </div>
        <img
          src="https://physiomobile.ca/wp-content/uploads/2016/03/Pageservice2.jpg"
          alt="serviceImage"
          className="w-6/12 rounded-xl"
        />
      </div>
    );
  });
  return (
    <Card width="w-11/12">
      <div>{services}</div>
    </Card>
  );
};

export default Services;
