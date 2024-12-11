import React from 'react'

const Pagination = ({totalItems, itemsPerPage, setPage, page}) => {
  return (
    <div className="w-full flex justify-center gap-2">
        {
            Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => (
            <button key={index} onClick={() => setPage(index+1)} className={`font-fira text-lg px-5 py-2 ${page === index+1? 'bg-gray-300' : 'bg-white'}`}>{index+1}</button>
            ))  
        }
    </div>
  )
}

export default Pagination