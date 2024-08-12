import React from "react";

const Box = ({ title, item, result }) => {
  {
    title === "Computer" && result !== null && (result = !result);
  }
  return (
    <div
      className={`card border-8 border-black w-full h-full text-center m-3 ${
        result === true
          ? "text-green-500 border-green-500"
          : result === false && "text-red-500 border-red-500"
      }`}
    >
      <div className="text-4xl font-semibold py-2">{title}</div>
      <img className="h-[600px] m-auto" src={item && item.img} alt="" />
      <div className="text-3xl font-semibold py-2">
        {result === null ? "TIE" : result === true ? "WINNER" : "LOSER"}
      </div>
    </div>
  );
};

export default Box;
