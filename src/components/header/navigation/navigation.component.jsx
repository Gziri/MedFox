import React from "react";

import { useNavigate } from "react-router";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <p onClick={() => navigate("/")}>Navigation</p>
    </div>
  );
};

export default Navigation;
