import error from "../assets/error.svg"

const Error = ({header, text, onClick}) => {
  return (
    <div>
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-[201]'>
            <div className='flex flex-col gap-8 py-10 px-10 items-center bg-white w-[360px] rounded-lg'>
                <img src={error} alt="error" className='w-[100px]' />
                <h3 className='text-xl text-center text-[#FF343C] font-semibold'>{header}</h3>
                <p className='text-center'>{text}</p>
                {
                    onClick && (
                        <button onClick={onClick} className='mt-4 bg-[#FF343C] text-white text-xl px-8 py-2 rounded-full hover:cursor-pointer hover:bg-[#FF343C]/90'>CLOSE</button>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Error