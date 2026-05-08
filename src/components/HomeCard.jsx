import React from "react";
import { Link } from "react-router-dom";

function HomeCard({ card }) {
  return (
    <div className="">
      <Link to={card.route}>
        <div className=" p-3 w-70 flex flex-col items-center justify-center gap-4 rounded bg-linear-to-b from-slate-50 to-slate-200 text-slate-800">
          <img src={card.image} className=" rounded" />

          <h1 className=" font-semibold">{card.title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default HomeCard;
