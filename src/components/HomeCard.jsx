import React from "react";
import { Link } from "react-router-dom";

function HomeCard({ card }) {
  return (
    <div className="">
      <Link to={card.route}>
        <div className=" p-3 w-70 flex flex-col items-center justify-center gap-4 rounded-xl bg-linear-to-b from-slate-50 to-slate-100 dark:bg-linear-to-b dark:from-slate-700/90 dark:to-slate-800 text-slate-800 dark:text-slate-100">
          <img src={card.image} className=" rounded-lg" />

          <h1 className=" font-semibold">{card.title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default HomeCard;
