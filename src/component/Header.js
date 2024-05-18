import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import YouTubeLogo from "../assets/YouTubeLogo.jpg";
import { RiAccountCircleFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const onSideBarToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5  shadow-2xl">
      <div className="flex col-span-1">
        <button onClick={onSideBarToggle}>
          <IconContext.Provider value={{ className: "global-icon-class-name" }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </button>
        <a href="/">
          <img
            src={YouTubeLogo}
            alt="You Tube logo"
            className="w-40 mx-4 align-middle bg-transparent"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 ">
        <input
          type="text"
          name="Search"
          placeholder="Search"
          className="w-1/2 h-10 text-gray-900 ring-1 ring-inset ring-gray-700 
          border-0 py-1.5 pl-7 pr-20 rounded-l-full focus:ring-2 focus:ring-inset
          placeholder:text-gray-400 align-middle placeholder:text-xl focus:ring-black"
        />
        <button
          className="h-10 align-middle rounded-md border-0 bg-transparent py-0 pl-2 pr-7
         focus:ring-2 focus:ring-inset bg-gray-700 focus:ring-black sm:text-sm rounded-r-full"
        >
          <IconContext.Provider value={{ className: "global-icon-class-name" }}>
            <IoSearchOutline />
          </IconContext.Provider>
        </button>
      </div>
      <div className="col-span-1">
        <IconContext.Provider value={{ className: "global-icon-class-name" }}>
          <RiAccountCircleFill />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Header;
