import React, { useEffect, useState } from 'react'
import NotesActive from './NotesActive'
import NotesArchive from './NotesArchive'
import { AiOutlinePlus } from "react-icons/ai"
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import Storagebase from '../utils/Storagebase'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'

const Main = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Add Note')
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [idEdit, setIdEdit] = useState('')
  const [search, setSearch] = useState('')
  const showModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    const notes = Storagebase.get('NOTES')
    if(notes) {
      setNotes(notes)
    } else {
      localStorage.setItem('NOTES', JSON.stringify([]))
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if(idEdit) {
      const getNote = Storagebase.getById('NOTES', idEdit)
      if(getNote) {
        const note = {
          id: getNote.id,
          title,
          body,
          created_at: new Date(),
          archived: getNote.archived
        }
        Storagebase.update('NOTES', idEdit, note)
        toast.success("Note updated successfully!")
      }
    } else {
      const note = {
        id: nanoid(),
        title,
        body,
        created_at: new Date(),
        archived: false
      }
      Storagebase.store('NOTES', note)
      toast.success("Note created successfully!")
    }

    setNotes(Storagebase.get('NOTES'))
    setIsOpen(false)
    setTitle('')
    setBody('')
  }

  const editNote = (id) => {
    const data = Storagebase.getById('NOTES', id)
    setTitle(data.title)
    setBody(data.body)
    setIdEdit(id)
  }

  const handleDelete = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full mx-auto my-52 max-w-md h-full md:h-auto">
              <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
                <button type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-[#61DAFB] hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="deleteModal" onClick={onClose}>
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <svg className="text-gray-400 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                <p className="mb-4 text-gray-500">Are you sure you want to delete this item?</p>
                <div className="flex justify-center items-center space-x-4">
                  <button data-modal-toggle="deleteModal" type="button" className="py-2 px-3 text-sm font-medium text-gray-300 bg-gray-700 rounded-lg border border-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 focus:z-10" onClick={onClose}>
                    No, cancel
                  </button>
                  <button type="submit" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                    onClick={() => {
                      Storagebase.delete('NOTES', id)
                      setNotes(Storagebase.get('NOTES'))
                      toast.success("Note deleted successfully!")
                      onClose();
                    }}
                  >
                    Yes, I'm sure
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  }

  const handleArchive = (id, archived) => {
    const getNote = Storagebase.getById('NOTES', id)
    getNote.archived = archived
    Storagebase.update('NOTES', id, getNote)
    setNotes(Storagebase.get('NOTES'))
  }

  return (
    <>
      <div className='w-full bg-[#20232A] text-center md:p-5 p-3'>
          <input className="shadow appearance-none border rounded md:w-80 md:py-2 py-1 px-3 text-gray-700 placeholder:md:text-base placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Notes" value={search} onChange={(event) => setSearch(event.target.value)}/>
          <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold md:py-3 py-1 md:px-4 px-2 rounded inline-flex items-center" onClick={() => {
            showModal()
            setModalTitle('Add Note')
            setIdEdit('')
          }}>
            <AiOutlinePlus />
          </button>
      </div>
      <Rodal visible={modalIsOpen} onClose={() => {
        closeModal()
        setTitle('')
        setBody('')
        }} animation="fade" width={370} height={270}>
          <div>
            <h3>{modalTitle}</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mt-5'>
              <div className='mb-2'>
                <input type="text" id="title" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#61DAFB] block w-full p-2.5" placeholder="Title" required maxLength={50} value={title} onChange={(event) => setTitle(event.target.value)}/>
              </div>
              <div>
                <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:border-[#61DAFB]" placeholder="Write your note here" value={body} onChange={(event) => setBody(event.target.value)}/>
              </div>
              <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm md:px-5 px-3 md:py-2.5 py-2 mr-2 my-2">Save</button>
            </div>
          </form>
      </Rodal>
      <div className='w-4/5 m-auto'>
        <NotesActive notes={notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))} editNote={editNote} showModal={showModal} setModalTitle={setModalTitle} handleDelete={handleDelete} handleArchive={handleArchive}/>
        <NotesArchive notes={notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))} editNote={editNote} showModal={showModal} setModalTitle={setModalTitle} handleDelete={handleDelete} handleArchive={handleArchive}/>
      </div>
      <ToastContainer />
    </>
  )
}

export default Main