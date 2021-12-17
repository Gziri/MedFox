import React from "react";

import Card from "../components/UI/card.component";

const RequestService = () => (
  <Card>
    <div className="w-full text-center flex flex-col justify-center align-middle">
    <p className="text-4xl pb-4 text-sky-500">სერვისის მოთხოვნა</p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfQWvIVgZanxnAGKPylqvrGE88eywbhwyaPwVCv6w2vpGP7-g/viewform?embedded=true"
        width="900"
        height="520"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  </Card>
);

export default RequestService;
