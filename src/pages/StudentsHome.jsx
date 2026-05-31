import React, { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

function StudentsHome() {

  const [search, setSearch] = useState("");

  const cards = [
    {
      icon: "",
      title: "Indian States",
      route: "/Indian states",
    },
    {
      icon: "",
      title: "Current Affairs",
      route: "/currentaffairs",
    },
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1780230943/Inventors_pljfcs.png",
      title: "Inventions",
      route: "/inventions",
    },
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1780230866/Shapes_y5umfr.png",
      title: "Mensuration",
      route: "/mensuration",
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
  //-------------------
  const searchResults = cards.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className=" w-full min-h-screen p-2 flex flex-col bg-slate-200 dark:bg-black/40 dark:text-slate-100">
      <SearchBar search={search} setSearch={setSearch} />

      <div className=" p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {searchResults.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </section>
  );
}

export default StudentsHome;
