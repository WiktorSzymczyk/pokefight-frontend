import React from "react";

export default function SingleCard(props) {
  return (
    <div>
      <div className="bg-[#fff] w-max p-10 m-2">
        <h1>{props.name}</h1>
        <img src={props.image} width={"100%"} alt="" />
        <button className="bg-orange-700 text-white p-2 m-2">Details</button>
        <button className="bg-orange-200 text-white p-2 m-2">Select</button>
      </div>
    </div>
  );
}
