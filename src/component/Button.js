import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="rounded-full bg-gray-300 text-sm font-semibold  px-6 py-2 m-3 mt-6 ">
        {name}
      </button>
    </div>
  );
};

export default Button;
