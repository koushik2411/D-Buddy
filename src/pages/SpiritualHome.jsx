import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

function SpiritualHome() {

  const [search, setSearch] = useState("");

  const cards = [
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1779784609/yoga_speh3l.png",
      title: "Yoga",
      route: "",
    },
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1779784609/chakras_bziblx.png",
      title: "Chakras",
      route: "",
    },
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1779784609/durga_chalisa_wytc9n.png",
      title: "Durga Chalisa",
      route: "",
    },
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1779784610/hanuman_chalisa_mq2nos.png",
      title: "Hanuman Chalisa",
      route: "",
    },
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1779784609/shiv_chalisa_wpglyp.png",
      title: "Shiv Chalisa",
      route: "",
    },
    {
      icon: "https://res.cloudinary.com/dcfjexbss/image/upload/v1779784610/shiv_tandav_c5swl4.png",
      title: "Shiv Taandav",
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

      <div className=" p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2">
        {searchResults.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </section>
  )
}

export default SpiritualHome