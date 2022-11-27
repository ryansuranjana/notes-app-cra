import React, { useEffect, useState } from 'react'
import NotesActive from './NotesActive'
import NotesArchive from './NotesArchive'
import { AiOutlinePlus } from "react-icons/ai"
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import Storagebase from '../utils/Storagebase'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Add Note')
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [idEdit, setIdEdit] = useState('')
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
    Storagebase.delete('NOTES', id)
    setNotes(Storagebase.get('NOTES'))
    toast.success("Note deleted successfully!")
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
          <input className="shadow appearance-none border rounded md:w-80 md:py-2 py-1 px-3 text-gray-700 placeholder:md:text-base placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Notes" />
          <button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold md:py-3 py-1 md:px-4 px-2 rounded inline-flex items-center" onClick={() => {
            showModal()
            setModalTitle('Add Note')
            setIdEdit('')
          }}>
            <AiOutlinePlus />
          </button>
      </div>
      <Rodal visible={modalIsOpen} onClose={closeModal} animation="fade" width={370} height={270}>
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
        <NotesActive notes={notes} editNote={editNote} showModal={showModal} setModalTitle={setModalTitle} handleDelete={handleDelete} handleArchive={handleArchive}/>
        <NotesArchive notes={notes} editNote={editNote} showModal={showModal} setModalTitle={setModalTitle} handleDelete={handleDelete} handleArchive={handleArchive}/>
      </div>
      <ToastContainer />
    </>
  )
}

export default Main