import React from "react";
import Button from "./Button";
import { BUTTON_ITEM } from "../constant/constant";

const ButtonList = () => {
  return (
    <div className="flex">
      {BUTTON_ITEM.map((buttonName) => (
        <Button name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
