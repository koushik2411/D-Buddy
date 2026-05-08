import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {

  return (
    <div>
      <Link to={item.route}>
        <div className=" p-3 w-40 md:w-60 lg:w-80 flex flex-col items-center justify-center gap-2 rounded bg-linear-to-b from-slate-50 to-slate-200 text-slate-800">
          <img src={item.icon} className=" rounded" />

          <h1 className=" font-semibold">{item.title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default Card;
