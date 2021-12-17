import React from "react";
import ReactHtmlParser from "react-html-parser";

import Card from "../components/UI/card.component";
import DATA from "./data";

const Services = () => {
  const services = DATA.services.map((service) => {
    if (service.side === "l") {
      return (
        <div
          className="laptop:flex laptop:align-middle laptop:justify-center mb-5
       "
          key={service.key}
        >
          <img
            src="https://physiomobile.ca/wp-content/uploads/2016/03/Pageservice2.jpg"
            alt="serviceImage"
            className="h-96 w-full object-cover laptop:h-full laptop:w-6/12 rounded-xl"
          />
          <div className="laptop:pl-20 laptop:w-5/12 text-justify">
            <h1 className="text-center my-5 laptop:mb-15">
              <p className="text-2xl laptop:text-3xl text-sky-500">
                {service.name}
              </p>
            </h1>
            <span className="text-gray-500">
              {ReactHtmlParser(service.description.main)}
            </span>
            <br />
            <span className="font-bold text-gray-600">
              {ReactHtmlParser(service.description.listTitle)}
            </span>
            <br />
            <ul className="list-disc list-inside text-gray-800">
              {ReactHtmlParser(service.description.list)}
            </ul>
            <br />
            <span className="text-gray-500">
              {ReactHtmlParser(service.description.last)}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="flex flex-col-reverse  laptop:flex-row laptop:align-middle laptop:justify-center mb-5
        "
          key={service.key}
        >
          <div className="laptop:pr-20 laptop:w-5/12 text-justify">
            <h1 className="text-center my-5 laptop:mb-15">
              <p className="text-2xl text-sky-500">{service.name}</p>
            </h1>
            <span className="text-gray-500">
              {ReactHtmlParser(service.description.main)}
            </span>
            <br />
            <span className="font-bold text-gray-600">
              {ReactHtmlParser(service.description.listTitle)}
            </span>
            <br />
            <ul className="list-disc list-inside text-gray-800">
              {ReactHtmlParser(service.description.list)}
            </ul>
            <br />
            <span className="text-gray-500">
              {ReactHtmlParser(service.description.last)}
            </span>
          </div>
          <img
            src="https://physiomobile.ca/wp-content/uploads/2016/03/Pageservice2.jpg"
            alt="serviceImage"
            className="h-96 w-full object-cover laptop:h-full laptop:w-6/12 rounded-xl"
          />
        </div>
      );
    }
  });
  return (
    <Card width="w-11/12">
      <div className="flex flex-col justify-center align-middle text-center">
        <p className="text-4xl pb-3 text-sky-500">სერვისები</p>

      <div className="select-none">{services}</div>
      </div>
    </Card>
  );
};

export default Services;
