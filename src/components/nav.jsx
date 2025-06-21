import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

function Nav() {
  return (
    <nav className="flex items-center w-full justify-between lg:justify-evenly lg:h-28 shadow-sm shadow-slate-300 bg-white">
      <div>
        <img src={logo} alt="" className="translate-x-5 scale-110" />
      </div>
      <div className="lg:block hidden h-full">
        <ul className=" flex  h-full justify-center items-center gap-10 text-slate-400  ">
          <li className="group h-full hover:text-slate-700 text-lg relative  flex items-center justify-center transition-all ease-in duration-200">
            Home{" "}
            <span className="group-hover:bg-gradient-to-r from-green-400 to-blue-300 h-1 w-full absolute left-0 bottom-0 transition-all ease-out duration-200"></span>
          </li>
          <li className="group h-full hover:text-slate-700 text-lg relative  flex items-center justify-center transition-all ease-in duration-200">
            About{" "}
            <span className="group-hover:bg-gradient-to-r from-green-400 to-blue-300 h-1 w-full absolute left-0 bottom-0 transition-all ease-out duration-200"></span>
          </li>{" "}
          <li className="group h-full hover:text-slate-700 text-lg relative  flex items-center justify-center transition-all ease-in duration-200">
            Contact{" "}
            <span className="group-hover:bg-gradient-to-r from-green-400 to-blue-300 h-1 w-full absolute left-0 bottom-0 transition-all ease-out duration-200"></span>
          </li>{" "}
          <li className="group h-full hover:text-slate-700 text-lg relative  flex items-center justify-center transition-all ease-in duration-200">
            Blog{" "}
            <span className="group-hover:bg-gradient-to-r from-green-400 to-blue-300 h-1 w-full absolute left-0 bottom-0 transition-all ease-out duration-200"></span>
          </li>{" "}
          <li className="group h-full hover:text-slate-700 text-lg relative  flex items-center justify-center transition-all ease-in duration-200">
            Career{" "}
            <span className="group-hover:bg-gradient-to-r from-green-400 to-blue-300 h-1 w-full absolute left-0 bottom-0 transition-all ease-out duration-200 "></span>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <button className="w-44 h-12 grid place-items-center text-white hover:brightness-105 rounded-r-full rounded-l-full bg-gradient-to-r from-green-400 to-blue-300 font-semibold">
          Request Invite
        </button>
      </div>
      <div className="lg:hidden">
        <button className="size-12 grid place-items-center">
          <img src={hamburger} className="object-cover " alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
