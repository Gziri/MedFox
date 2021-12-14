import React from "react";

import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer">
      <p onClick={() => navigate("/")}> Logo Here</p>
    </div>
  );
};

export default Logo;
