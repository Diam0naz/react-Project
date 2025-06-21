import React from "react";

function Latest({ news }) {
  let cards = news.map((card) => (
    <div className="flex flex-col justify-center w-96 lg:w-80 h-[500px] py-5  ">
      <div className="h-[50%] w-full lg:rounded-t-md rounded-t-md overflow-hidden">
        <img src={card.image} alt="" className="object-cover h-full w-full" />
      </div>

      <div className="p-5 flex flex-col justify-start gap-2 h-[50%] bg-white">
        <h3 className="text-zinc-400 font-xs font-light">{card.author}</h3>
        <h2 className="text-lg font-normal text-slate-800">{card.title}</h2>
        <p className="text-balance text-zinc-400 font-sm font-light">
          {card.news}
        </p>
      </div>
    </div>
  ));
  return (
    <>
      <div className="bg-zinc-50 py-14">
        <h1 className="w-[80%] mx-auto my-10 lg:text-5xl lg:font-light lg:text-slate-800 lg:text-left text-4xl text-slate-800 font-light break-words text-center">
          Latest Articles
        </h1>
        <div className="flex flex-col gap-5 lg:flex-row justify-between items-center w-[80vw] mx-auto">
          {cards}
        </div>
      </div>
    </>
  );
}

export default Latest;
