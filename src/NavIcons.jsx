import './App.css'
import { useCartContext } from './CartContext'
import { useNavigate } from 'react-router-dom'

export default function(){
  const navigate = useNavigate()
  const { cart } = useCartContext()
  return(
    <ul className='NavIcons'>
      <li>
         <i onClick={()=>navigate('/search')} class="fa-solid fa-magnifying-glass"></i>
      </li>
      <li>
        <i onClick={()=>navigate('/')}  class="fa-solid fa-bag-shopping"></i>
      </li>
      <li>
        <i onClick={()=>navigate('/cart')} className="fa-solid fa-cart-shopping cursor-pointer"></i>{/* ({cart.length}) */}
      </li>
      <li>
        <i onClick={()=>navigate('/user')} class="fa-regular fa-user"></i>
      </li>
    </ul>
  )
}
