import React from "react";
import background from "/home/user/Documents/bankApp/src/assets/images/bg-intro-desktop.svg";
import heroPic from "/src/assets/images/image-mockups.png";
import heroPic2 from "/src/assets/images/bg-intro-mobile.svg";

function Body() {
  return (
    <div className="w-full h-[850px] relative bg-zinc-50 overflow-hidden ">
      <img
        src={heroPic}
        alt=""
        className="lg:block absolute top-0 right-0 z-20   object-cover -translate-y-[29%] lg:top-0 lg:right-0 lg:z-30 lg:translate-x-[15%] lg:scale-110 lg:-translate-y-[10%]"
      />
      <img
        src={heroPic2}
        className="lg:hidden w-full block absolute top-0 right-0 z-10 lg:translate-x-[15%] lg:scale-110 lg:-translate-y-[10%] -translate-y-[9%]
      "
        alt=""
      />{" "}
      <div className=" w-full h-full flex flex-col justify-center relative ">
        <div className="lg:hidden absolute bottom-[20%] left-[50%] -translate-x-[50%] text-nowrap flex flex-col gap-10 items-center leading-relaxed text-center ">
          <h1 className="text-5xl font-light text-slate-800 ">
            {" "}
            Next generation <br /> digital banking
          </h1>
          <p className="text-lg font-light text-slate-400 ">
            Take your financial life online. Your Easybank <br />
            account will be a one-stop-shop for spending, <br />
            saving, budgeting, investing, and much more.
          </p>
          <button className="w-44 h-12 grid place-items-center text-white hover:brightness-105 rounded-r-full rounded-l-full bg-gradient-to-r from-green-400 to-blue-300 font-semibold">
            Request Invite
          </button>
        </div>
        <div className="hidden lg:block w-full h-full overflow-hidden relative z-10 ">
          <img
            src={background}
            alt=""
            className=" h-full absolute top-0 right-0 translate-x-[20%] -translate-y-[25%]"
          />

          <div className="absolute top-0 left-0 translate-x-[70%] translate-y-[70%] flex flex-col gap-10 leading-relaxed">
            <h1 className="text-6xl font-light text-slate-800 ">
              {" "}
              Next generation <br /> digital banking
            </h1>
            <p className="text-lg font-light text-slate-400 ">
              Take your financial life online. Your Easybank account <br /> will
              be a one-stop-shop for spending, saving, <br /> budgeting,
              investing, and much more.
            </p>
            <button className="w-44 h-12 grid place-items-center text-white hover:brightness-105 rounded-r-full rounded-l-full bg-gradient-to-r from-green-400 to-blue-300 font-semibold">
              Request Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
