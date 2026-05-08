import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" py-1.5 px-4 shadow flex items-center justify-between">
      <Link to="/">
        <div className=" flex flex-col">
          <h1 className=" text-xl font-bold border-b">
            D-BUDDY
          </h1>

          <p className=" text-xs">
            Smart Living | Fun Learning
          </p>
        </div>
      </Link>

      <div className=" flex items-center gap-3 text-2xl">
        <button>
          <IoMdColorPalette/>
        </button>
      </div>
    </header>
  );
}

export default Header;
