import './App.css'
import Logo from './Logo'
import NavElements from './NavElements'
import NavIcons from './NavIcons'

export default function(){
  return(
    <div className='Navbar'>
      <Logo/>
      <NavElements/>
      <NavIcons/>
    </div>
  )
}