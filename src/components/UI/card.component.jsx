import React from "react";

const Card = (props) => {
  const childDiv = props.width
    ? `${props.width}  bg-neutral-50 p-5 text-justify rounded-xl mb-5`
    : "w-9/12  bg-neutral-50 p-5 text-justify rounded-xl mb-5";
  return (
    <div className="mt-6 w-full w- justify-center flex">
      <div className={childDiv} style={{opacity:props.opacity}}>{props.children}</div>
    </div>
  );
};

export default Card;
