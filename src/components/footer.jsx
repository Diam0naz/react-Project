import React from "react";
import logo from "../assets/images/logo.svg";
import facebookIcn from "../assets/images/icon-facebook.svg";
import youtubeIcn from "../assets/images/icon-youtube.svg";
import twitterIcn from "../assets/images/icon-twitter.svg";
import pinterestIcn from "../assets/images/icon-pinterest.svg";
import instagramIcn from "../assets/images/icon-instagram.svg";

function Footer() {
  return (
    <div className="bg-indigo-950 lg:pl-32 pt-16 pb-12">
      <div className="flex lg:flex-row flex-col lg:gap-56  justify-around items-center lg:items-center ">
        <div className="flex lg:flex-row flex-col items-center lg:justify-evenly lg:w-[40%] lg:items-start">
          <div className="flex flex-col mb-10 lg:gap-10 lg:mr-20">
            <img src={logo} className="text-white scale-95" alt="logo" />
            <div className="flex gap-4 mt-5 scale-110 lg:scale-100">
              <span className="hover:bg-gradient-to-r from-green-400 to-blue-400 size-7 flex justify-center items-center rounded-full">
                <img src={facebookIcn} alt="facebook" />
              </span>

              <span className="hover:bg-gradient-to-r from-green-400 to-blue-400 size-7 flex justify-center items-center rounded-full">
                <img src={youtubeIcn} alt="youtube" />
              </span>

              <span className="hover:bg-gradient-to-r from-green-400 to-blue-400 size-7 flex justify-center items-center rounded-full">
                <img src={twitterIcn} alt="twitter" />
              </span>
              <span className="hover:bg-gradient-to-r from-green-400 to-blue-400 size-7 flex justify-center items-center rounded-full">
                <img src={pinterestIcn} alt="pinterest" />
              </span>

              <span className="hover:bg-gradient-to-r from-green-400 to-blue-400 size-7 flex justify-center items-center rounded-full">
                <img src={instagramIcn} alt="instagram" />
              </span>
            </div>
          </div>
          <div className="mt-0 flex lg:flex-row lg:justify-between lg:items-center lg:gap-20  flex-col">
            <div className="text-center lg:text-left lg:space-y-5">
              <p className="text-white hover:text-green-500">About Us</p>
              <p className="text-white hover:text-yellow-500 ">Contact</p>
              <p className="text-white hover:text-blue-500 ">Blog</p>
            </div>
            <div className="text-center lg:text-left lg:space-y-5">
              <p className="text-white hover:text-pink-500 ">Careers</p>
              <p className="text-white hover:text-purple-500 ">Support</p>
              <p className="text-white hover:text-orange-500 ">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 lg:-translate-y-10 self-center flex flex-col gap-5 items-center lg:self-start">
          <button className="rounded-full h-12 w-40 bg-gradient-to-r from-green-400 to-blue-400 text-white -mt-4 hover:brightness-105">
            Request Invite
          </button>
          <p className="pt-4 text-slate-500 text-center lg:-translate-x-6">
            &copy; Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
