import burguerIcon from '../assets/images/burgerIcon.png'
export const NavBar = () => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm: place-content-around sm:text-[16px]
                    sm:items-center">
        <li>
            <a href="#">Inicio</a>
        </li>
        <li>
            <a href="#">Autos</a>
        </li>
        <li>
            <a href="#">Refacciones</a>
        </li>
        <li>
            <a href="#">Artículos</a>
        </li>
        <li>
            <a href="#">Comunícate</a>
        </li>
    </ul>
    <img className='w-10 h-4 cursor-pointer sm:hidden' src={burguerIcon} alt="" />
    </>
  )
}
