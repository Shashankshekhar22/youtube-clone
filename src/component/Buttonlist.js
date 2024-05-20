import React from "react";
import Button from "./Button";
import { BUTTON_ITEM } from "../constant/constant";

const ButtonList = () => {
  return (
    <div className="flex">
      {BUTTON_ITEM.map((buttonName, index) => (
        <Button name={buttonName} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
