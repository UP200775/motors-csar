import logo from '../assets/images/logo.png'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-14">
        <img className='w-[205px]' src={logo} alt="logo"/>
        <NavBar />
    </header>
  )
}
