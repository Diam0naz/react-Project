import React from "react";
import { useState } from "react";

function About({ items }) {
  let cards = items.map((about) => (
    <div className="flex flex-col lg:items-start gap-10">
      <img src={about.icon} alt="" className="lg:self-start self-center" />
      <h2 className="text-3xl font-light text-slate-800 text-center ">
        {about.info}
      </h2>
      <p className="lg:text-balance text-zinc-400 font-lg font-light lg:text-left leading-relaxed text-center">
        {about.about}
      </p>
    </div>
  ));

  return (
    <>
      <div className="w-full bg-zinc-100 py-28 ">
        <div className="w-[80%] mx-auto flex flex-col gap-10 ">
          <h1 className="lg:text-5xl lg:font-light lg:text-slate-800 lg:text-left text-4xl text-slate-800 font-light break-words text-center">
            Why choose <br className="block lg:hidden" /> Easybank?
          </h1>
          <p className="lg:bloock hidden lg:text-lg lg:font-light lg:text-slate-400 text-lg font-light text-slate-400 text-balance text-center lg:text-left ">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br className="lg:block hidden" /> Control your
            finances like never before.
          </p>
          <p className="text-nowrap lg:text-lg lg:font-light lg:text-zinc-400 text-lg font-light text-zinc-400 text-center lg:text-left ">
            We leverage Open Banking to turn your bank <br />
            account into your financial hub. Control your <br />
            finances like never before.
          </p>
          <div className="flex flex-col gap-5 lg:flex-row justify-between items-center mt-12">
            {cards}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
