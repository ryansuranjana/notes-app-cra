import React from 'react'
import { AiOutlinePlus } from "react-icons/ai"

const Header = () => {
  return (
    <>
      <div className='w-full p-5 text-center bg-[#16181D]'>
        <h1 className='text-3xl font-bold text-[#61DAFB]'>Notes App</h1>
      </div>
      <div className='w-full bg-[#20232A] text-center p-5'>
          <input className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Notes" />
          <button class="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center">
            <AiOutlinePlus />
          </button>
      </div>
    </>
  )
}

export default Header