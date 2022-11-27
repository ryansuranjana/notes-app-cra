import React from 'react'

const NotesArchive = () => {
  return (
    <div className='mb-16'>
        <h3 className='font-bold md:text-2xl text-xl'>Archive</h3>
            <div className='grid md:grid-cols-3 gap-3 md:mt-5 mt-3'>
                <div className="max-w-sm h-max rounded overflow-hidden shadow-lg border border-[#61DAFB]">
                    <div className="px-6 py-4">
                        <div className="font-bold md:text-xl text-lg mb-2">The Coldest Sunset</div>
                        <p className='md:text-sm text-xs font-light -mt-2 mb-3'>Kamis, 14 April 2022</p>
                        <p className="text-gray-700 md:text-base text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 md:pt-4 pt-1 md:pb-5 pb-4">
                        <div>
                            <button className="bg-transparent hover:bg-orange-400  text-orange-400 md:font-semibold md:text-base text-sm hover:text-white py-2 md:px-4 px-3 border border-orange-400  hover:border-transparent rounded mr-2">
                                Edit
                            </button>
                            <button className="bg-transparent hover:bg-red-600 text-red-600 md:font-semibold md:text-base text-sm hover:text-white py-2 md:px-4 px-3 border border-red-600 hover:border-transparent rounded mr-2">
                                Delete
                            </button>
                            <button className="bg-transparent hover:bg-[#61DAFB] text-[#61DAFB] md:font-semibold md:text-base text-sm hover:text-white py-2 md:px-4 px-3 border border-[#61DAFB] hover:border-transparent rounded">
                                Unarchive
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NotesArchive