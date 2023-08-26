import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import burguerIcon from '../assets/images/burgerIcon.png'

export const SlideBar = () => {
   const [open, setOpen] = useState(false)

   const closeSlideBar = () => {
    setOpen(false);
  };

  return (
    <div className='w-10 h-4 cursor-pointer sm:hidden'>

      <button className='ml-4' onClick={() => setOpen(true)}>
        <img className='w-[100px]' src={burguerIcon} />
      </button>

      <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

      <div className={`${open ? "w-80" : "w-0"} bg-white min-h-screen fixed top-0 left-0 transition-all duration-300`}>
        <div className={`${!open && "hidden"} pt-3 `}>
          <button className='ml-4 text-black mb-14' onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className='text-center font-bold text-[25px] text-black text-xl py-4 mb-3'>
            Páginas
          </div>

          <div className='text-center text-black text-xl hover:bg-black hover:text-white cursor-pointer py-3 mb-2'>
            <Link to="/" onClick={closeSlideBar}>Inicio</Link>
          </div>

          <div className='text-center text-black text-xl hover:bg-black hover:text-white cursor-pointer py-3 mb-2'>
            <Link to="/Autos" onClick={closeSlideBar}>Autos</Link>
          </div>

          <div className='text-center text-black text-xl hover:bg-black hover:text-white cursor-pointer py-3 mb-2'>
            <Link to="/Refacciones" onClick={closeSlideBar}>Refacciones</Link>
          </div>

          <div className='text-center text-black text-xl hover:bg-black hover:text-white cursor-pointer py-3 mb-2'>
            <Link to="/Artículos" onClick={closeSlideBar}>Artículos</Link>
          </div>

          <div className='text-center text-black text-xl hover:bg-black hover:text-white cursor-pointer py-3 mb-2'>
            <Link to="/Comunícate" onClick={closeSlideBar}>Comunícate</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
