import React from 'react'

const Loading = () => {
  return (
    <div className='fixed z-[201] left-0 w-full h-full bg-black/50 top-0 flex justify-center items-center'>
        <div className="outline outline-2 py-2 px-3 flex gap-3 items-center bg-mustard text-black font-permanent-marker" disabled>
            <div className="inline-block h-8 w-8 animate-spin border-black rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                </span>
            </div>
            <p className='text-xl'>LOADING...</p>
        </div>
    </div>
  )
}

export default Loading