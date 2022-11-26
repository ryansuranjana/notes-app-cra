import React from 'react'

const NotesArchive = () => {
  return (
    <div className='mb-16'>
        <h3 className='font-bold text-2xl'>Archive</h3>
            <div className='grid grid-cols-3 gap-3 mt-5'>
                <div className="max-w-sm h-max rounded overflow-hidden shadow-lg border border-[#61DAFB]">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className='text-sm font-light -mt-2 mb-3'>Kamis, 14 April 2022</p>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-5">
                        <div>
                            <button className="bg-transparent hover:bg-orange-400  text-orange-400 font-semibold hover:text-white py-2 px-4 border border-orange-400  hover:border-transparent rounded mr-2">
                                Edit
                            </button>
                            <button className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded mr-2">
                                Delete
                            </button>
                            <button className="bg-transparent hover:bg-[#61DAFB] text-[#61DAFB] font-semibold hover:text-white py-2 px-4 border border-[#61DAFB] hover:border-transparent rounded">
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