import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  return (
    <div className='pb-2 w-full flex items-center justify-center gap-2 border-b'>
        <input
            type='text'
            placeholder='Search your component'
            className=' py-1.5 px-3 w-[65vw] border rounded-lg overflow-hidden'
        />

        <button className=' border py-1 px-2 flex gap-2 items-center rounded-lg'>
            <FaSearch/> Search
        </button>
    </div>
  )
}

export default SearchBar