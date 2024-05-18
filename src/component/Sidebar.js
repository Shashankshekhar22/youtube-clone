import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IconContext } from "react-icons";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiScissorsFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
  if (!isSideBarOpen) {
    return null;
  }
  return (
    <div className="p-6 w-60 ">
      <div>
        <Link to="/">
          <h1
            className="font-bold flex text-lg my-2 hover:cursor-pointer 
       hover:bg-gray-200  hover:rounded-md px-2"
          >
            <IconContext.Provider
              value={{ className: "sidebar-icon-class-name" }}
            >
              <FaHome />
            </IconContext.Provider>
            Home
          </h1>
        </Link>
        <h1 className="px-2 font-bold flex my-2 text-lg hover:cursor-pointer hover:bg-gray-200  hover:rounded-md">
          <IconContext.Provider
            value={{ className: "sidebar-icon-class-name" }}
          >
            <SiYoutubeshorts />
            Shorts
          </IconContext.Provider>
        </h1>
        <h1 className="font-bold flex my-2 px-2 text-lg hover:cursor-pointer hover:bg-gray-200  hover:rounded-md">
          <IconContext.Provider
            value={{ className: "sidebar-icon-class-name" }}
          >
            <MdSubscriptions /> Subscription
          </IconContext.Provider>
        </h1>

        <ul className="font-bold text-lg  hover:cursor-pointer ">
          <li className="px-2 flex my-2 hover:bg-gray-200  hover:rounded-md">
            <IconContext.Provider
              value={{ className: "sidebar-icon-class-name" }}
            >
              <MdOutlineSwitchAccount />
            </IconContext.Provider>
            Your Channel
          </li>
          <li className="px-2 flex my-2 hover:bg-gray-200  hover:rounded-md">
            <IconContext.Provider
              value={{ className: "sidebar-icon-class-name" }}
            >
              <MdHistory />
            </IconContext.Provider>
            History
          </li>
          <li className="px-2 flex my-2 hover:bg-gray-200  hover:rounded-md">
            <IconContext.Provider
              value={{ className: "sidebar-icon-class-name" }}
            >
              <MdPlaylistPlay />
            </IconContext.Provider>
            Playlist
          </li>
          <li className="flex px-2 my-2 hover:bg-gray-200  hover:rounded-md">
            <IconContext.Provider
              value={{ className: "sidebar-icon-class-name" }}
            >
              <MdOutlineOndemandVideo />
            </IconContext.Provider>
            Your Video
          </li>
          <li className="flex my-2 px-2 hover:bg-gray-200  hover:rounded-md">
            <IconContext.Provider
              value={{ className: "sidebar-icon-class-name" }}
            >
              <MdOutlineWatchLater />
            </IconContext.Provider>
            Watch Later
          </li>
          <li className="flex my-2 px-2 hover:bg-gray-200  hover:rounded-md">
            <IconContext.Provider
              value={{ className: "sidebar-icon-class-name" }}
            >
              <AiOutlineLike />
            </IconContext.Provider>
            Liked Video
          </li>
          <li className="px-2 flex my-2 hover:bg-gray-200  hover:rounded-md">
            <IconContext.Provider
              value={{ className: "sidebar-icon-class-name" }}
            >
              <RiScissorsFill />
            </IconContext.Provider>
            Your Clip
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
