import React from "react";
import { IoMenu } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../assets/images/YouTube_logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/features/toggleMenuSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between py-5 px-7 relative">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <IoMenu
          size={26}
          className="cursor-pointer"
          onClick={() => handleToggleMenu()}
        />
        <Link to="/">
          <img className="h-7" src={logo} alt="logo" />
        </Link>
      </div>

      {/* CENTER (absolute center of screen) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[40%]">
        <div className="flex items-center">
          <input
            className="h-10 border border-gray-300 px-4 rounded-l-full w-full"
            type="text"
            placeholder="search"
          />
          <button className="h-10 border border-gray-300 px-4 rounded-r-full cursor-pointer bg-gray-300">
            <LuSearch size={20} />
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <FaCircleUser size={28} />
      </div>
    </div>
  );
};

export default Header;
