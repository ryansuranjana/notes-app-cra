import React, { useState } from 'react'
import NotesActive from './NotesActive'
import NotesArchive from './NotesArchive'
import { AiOutlinePlus } from "react-icons/ai"
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Main = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const showModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <div className='w-full bg-[#20232A] text-center p-5'>
          <input className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Notes" />
          <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center" onClick={showModal}>
            <AiOutlinePlus />
          </button>
      </div>
      <Rodal visible={modalIsOpen} onClose={closeModal} animation="fade" width="500">
          <div>Content</div>
      </Rodal>
      <div className='w-4/5 m-auto'>
        <NotesActive />
        <NotesArchive />
      </div>
    </>
  )
}

export default Main