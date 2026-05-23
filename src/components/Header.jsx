import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { Link } from "react-router-dom";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Header() {

  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className=" py-1 px-4 shadow flex items-center justify-between bg-slate-100 dark:bg-black/30">
      <Link to="/">
        <div className=" p-1 flex flex-col">
          <h1 className=" text-xl font-bold border-b">
            D-BUDDY
          </h1>

          <p className=" text-xs">
            Smart Living | Fun Learning
          </p>
        </div>
      </Link>

      <div className=" flex items-center gap-3 text-2xl">
        <button onClick={toggleTheme} className=" p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
        {darkMode? <FaSun/> : <FaMoon/>}
    </button>
      </div>
    </header>
  );
}

export default Header;
