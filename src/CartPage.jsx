import './App.css'
import './responsive.css'
import Navbar from './Navbar'
import Footer from './Footer'
import FeaturedProducts from './FeaturedProducts'
import DiscountList from './DiscountList'
import ButtonComponent from './ButtonComponent'
import CheckBoxComponent from './CheckBoxComponent'
import Header2 from './Header2'
import { useCartContext } from './CartContext'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function () {
  const navigate = useNavigate();
  const { cart } = useCartContext()
  const discountItems = [
    { text: 'Sub-total', price: cart.reduce((acc, c) => acc + (c.price * c.quantity), 0) },
    { text: 'Discount', price: 0 },
    { text: 'Total amount', price: cart.reduce((acc, c) => acc + (c.price * c.quantity), 0) },
    // Add more items as needed
  ];
  return (
    <main>
      <Navbar />
      <Header2 label="Your cart" />
      <div>
        <div className='CartTitle'>
          <h4></h4>
          <h4>Description</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
          <h4>Total</h4>
        </div>
        {cart && cart.map((c, idx) => <SingleCartProduct cart={c} idx={idx} />)}
        <div className='CartTitleDiscount'>
          <CheckBoxComponent label="Apply discount" />
        </div>
      </div>
      <div className="Discount">
        <DiscountList items={discountItems} />
        <ButtonComponent label="Check out" onClick={() => navigate('/checkout')} />
      </div>

      <h3 className='PeopleBuy'>People also buy</h3>
      <FeaturedProducts rows={1} />
      <Footer />
    </main>
  )
}


const SingleCartProduct = ({ cart, idx }) => {
  const { deleteProductFromCart, updateProductQuantityInCart } = useCartContext()
  const [qty, setQty] = useState(cart.quantity)
  useEffect(() => { updateProductQuantityInCart(idx, qty) }, [qty])
  return (
    <div className="w-full flex justify-between p-15 m-4 ">
      <div className="flex justify-center items-center w-32  border-bg2 py-2 px-2 border-2 rounded-lg"> <div className="flex rounded-lg justify-center items-center overflow-hidden"><img className='w-24 h-fit object-cover' src={cart.imageUrl} /></div></div>
      <div className="flex flex-col">
        <span className="ListPrice">${cart.price}</span>
        <span className ="ListDescriptionComponent">{cart.category}</span>
        <span className ="ListDescriptionComponent"><i className="fa-solid fa-tag"></i> {cart.pieces} pieces available</span>
        
      </div>
      <div className=" w-32 flex items-center gap-5">
        <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
        <span>{cart.quantity}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>
      <div className="ListPrice">
        ${cart.price}
      </div>
      <div className="ListPrice">
        ${cart.total}

        <i className="fa-solid fa-trash text-red-500 cursor-pointer" onClick={() => deleteProductFromCart(idx)} />
      </div>

    </div>
  )
}
