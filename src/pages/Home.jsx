import React from "react";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";

function Home() {
  const cards = [
    {
      title: "Kids Zone",
      image:
        "https://res.cloudinary.com/dcfjexbss/image/upload/v1776859119/Kids-Zone-cover_j8p58d.png",
      route: "/kids",
    },
    {
      title: "Students Zone",
      image:
        "https://res.cloudinary.com/dcfjexbss/image/upload/v1776859119/Students-Zone-cover_old7jx.png",
      route: "/students",
    },
    {
      title: "Utility Zone",
      image:
        "https://res.cloudinary.com/dcfjexbss/image/upload/v1776859119/Utility-Zone-cover_wr5tus.png",
      route: "/utility",
    },
    {
      title: "Spiritual Zone",
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1776955016/Spiritual-Zone-cover_dfpofy.png",
      route: "/spiritual",
    },
  ];

  {
    /*
        {
            title: "",
            image: "",
            route: "",
        },
    */
  }

  return (
    <div className=" min-h-screen w-full flex flex-col gap-6 lg:gap-9 items-center justify-center">
      <p className=" pt-5 p-1 lg:pt-0 text-slate-800 font-semibold text-xl lg:text-2xl">
        <span className="">Hello</span>, Welcome to{" "}
        <span className=" font-bold text-blue-500">D-Buddy</span> !
      </p>

      <div className="flex flex-col items-center justify-center gap-7 lg:gap-10 md:grid md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {cards.map((card, index) => (
          <HomeCard key={index} card={card} />
        ))}
      </div>

      <p className=" p-10 text-xs animate-pulse">
        This is a demo version. A lot more features will be joining soon with
        the complete version. Stay tuned!
      </p>
    </div>
  );
}

export default Home;
