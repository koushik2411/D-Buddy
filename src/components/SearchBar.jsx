import React, { useState } from 'react'

function SearchBar({ search, setSearch}) {

  return (
    <div className='pb-3 w-full flex items-center justify-center gap-2 border-b'>
        <input
            type='text'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            placeholder='Search your component'
            className=' py-1.5 px-3 w-[85vw] border rounded-lg overflow-hidden outline-0'
        />

    </div>
  )
}

export default SearchBar