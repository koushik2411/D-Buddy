import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

function SpiritualHome() {

  const [search, setSearch] = useState("");

  const cards = [
    {
      icon: "",
      title: "Yoga",
      route: "",
    },
    {
      icon: "",
      title: "Chakras",
      route: "",
    },
    {
      icon: "",
      title: "Hanuman Chalisa",
      route: "",
    },
    {
      icon: "",
      title: "Shiv Chalisa",
      route: "",
    },
    {
      icon: "",
      title: "Durga Chalisa",
      route: "",
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
  //------------------
  
  const searchResults = cards.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className=" w-full min-h-screen p-2 flex flex-col bg-slate-200 dark:bg-black/40 dark:text-slate-100">
      <SearchBar search={search} setSearch={setSearch} />

      <div className=" p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {searchResults.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </section>
  )
}

export default SpiritualHome