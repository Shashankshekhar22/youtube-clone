import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import YouTubeLogo from "../assets/YouTubeLogo.jpg";
import { RiAccountCircleFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../constant/constant";
import { cacheResults } from "../utils/videoSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestions] = useState([]);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const searchCache = useSelector((store) => store.videoDetails.searchData);
  useEffect(() => {
    const timer = setTimeout(() => {
      searchQuery.length > 0
        ? setShowSuggestionBox(true)
        : setShowSuggestionBox(false);

      searchCache[searchQuery]
        ? setSearchSuggestions(searchCache[searchQuery])
        : getSearchDataBasedSuggestion();
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchDataBasedSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSearchSuggestions(jsonData[1]);
    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 h-10 text-gray-900 ring-1 ring-inset ring-gray-700 
          border-0 py-1.5 pl-7 pr-20 rounded-l-full focus:ring-2 focus:ring-inset
          placeholder:text-gray-400 align-middle placeholder:text-xl focus:ring-blue-200"
          onBlur={() => setShowSuggestionBox(false)}
        />
        <button
          className="h-10 align-middle rounded-md border-0  py-0 pl-2 pr-7
         focus:ring-2 focus:ring-inset bg-gray-300 focus:ring-black sm:text-sm rounded-r-full"
        >
          <IconContext.Provider value={{ className: "global-icon-class-name" }}>
            <IoSearchOutline />
          </IconContext.Provider>
        </button>
        {showSuggestionBox && (
          <div
            id="search-suggestion"
            className="fixed bg-white py-2 px-2 w-[42rem] 
          rounded-xl shadow-2xl border-black border-1 border-solid"
          >
            <ul>
              {searchSuggestion.map((searchedValue, index) => (
                <li
                  className="py-2 px-2 shadow-sm  hover:bg-gray-200 rounded-lg"
                  key={index}
                >
                  {searchedValue}
                </li>
              ))}
            </ul>
          </div>
        )}
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
