import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {

  return (
    <div>
      <Link to={item.route}>
        <div className=" p-2 w-42 md:w-60 lg:w-80 flex flex-col items-center justify-center gap-2 rounded-xl bg-linear-to-b from-slate-200 to-slate-300/60 dark:bg-linear-to-b dark:from-slate-700/90 dark:to-slate-800 text-slate-800 dark:text-slate-100">
          <img src={item.icon} className=" rounded-lg" />

          <h1 className=" font-semibold">{item.title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default Card;
