import { Link } from 'react-router-dom'
import './App.css'

export default function(){
  return (
    <ul className='NavElements'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/product'>Products</Link>
      </li>
      <li>
        <Link to='/sellers'>Best sellers</Link>
      </li>
      <li>
        <Link to='/checkout'>Catalog</Link>
      </li>
      <li>
        <Link to='/contact'>Contact us</Link>
      </li>
    </ul>
  )
}
