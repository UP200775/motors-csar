import burguerIcon from '../assets/images/burgerIcon.png'
import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm: place-content-around sm:text-[16px]
                    sm:items-center">
        <li>
            <Link to="/">Inicio</Link>  
        </li>
  
        <li>
            <Link to="/Autos">Autos</Link>
        </li>

        <li>
            <Link to="/Refacciones">Refacciones</Link>
        </li>
        <li>
            <Link to="/Artículos">Artículos</Link>
        </li>
        <li>
            <Link to="/Comunícate">Comunícate</Link>
        </li>
    </ul>
    <img className='w-10 h-4 cursor-pointer sm:hidden' src={burguerIcon} alt="" />
    <Outlet />
    </>
  )
}
