import React from 'react'
import NotesActive from './NotesActive'
import NotesArchive from './NotesArchive'

const Main = () => {
  return (
    <div className='w-4/5 m-auto'>
        <NotesActive />
        <NotesArchive />
    </div>
  )
}

export default Main