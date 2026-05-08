import React from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

function UtilityHome() {
  const cards = [
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1776861029/Calculator_jgr2fx.png",
      title: "Calculator",
      route: "/calculator",
    },
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1777037177/Savings-Calc_fotgup.png",
      title: "Savings Calculator",
      route: "/savings",
    },
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1776936030/Bmi_conzvg.png",
      title: "BMI Calculator",
      route: "/bmi",
    },
  ];

  {
    /* {
      icon: "",
      title: "",
      route: "",
    },
     */
  }

  return (
    <section className=" w-full min-h-screen p-2 flex flex-col">
      <SearchBar />

      <div className=" p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {cards.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </section>
  );
}

export default UtilityHome;
