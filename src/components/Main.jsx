import React, { useState } from 'react'
import NotesActive from './NotesActive'
import NotesArchive from './NotesArchive'
import { AiOutlinePlus } from "react-icons/ai"
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Main = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Add Note')
  const showModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <div className='w-full bg-[#20232A] text-center p-5'>
          <input className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Notes" />
          <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center" onClick={() => {
            showModal()
            setModalTitle('Add Note')
          }}>
            <AiOutlinePlus />
          </button>
      </div>
      <Rodal visible={modalIsOpen} onClose={closeModal} animation="fade" width="500" height="270">
          <div>
            <h3>{modalTitle}</h3>
          </div>
          <form>
            <div className='mt-5'>
              <div className='mb-2'>
                <input type="text" id="first_name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#61DAFB] block w-full p-2.5" placeholder="Title" required maxLength={50}/>
              </div>
              <div>
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:border-[#61DAFB]" placeholder="Write your note here" defaultValue={""} />
              </div>
              <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2">Save</button>
            </div>
          </form>
      </Rodal>
      <div className='w-4/5 m-auto'>
        <NotesActive />
        <NotesArchive />
      </div>
    </>
  )
}

export default Main