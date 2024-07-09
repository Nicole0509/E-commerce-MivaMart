import './App.css'
// import './Responsive.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { faCcPaypal }  from '@fortawesome/free-brands-svg-icons';
import { faApple }  from '@fortawesome/free-brands-svg-icons';
import DiscountList from './DiscountList'
import ButtonComponent from './ButtonComponent'
import CheckBoxComponent from './CheckBoxComponent'
import ButtonIcon from './ButtonIcon'



const discountItems = [
  { text: 'Sub-total', price: 100 },
  { text: 'Discount', price: 200},
  { text: 'Total amount', price: 50},
  // Add more items as needed
];



export default function() {
  return (
    <main>
      <Navbar/>
      <span className='checkout'>
        <h3 className='PeopleBuy'> <i class="fa-solid fa-arrow-left"></i>Checkout Page</h3>
      </span>
      <div className='checkOutDiv'>
        <div className='OrderSummary'>
          <div className="cart-container">
            {cartItems.map((item, index) => (
              <SingleCartProduct key={index} cart={item} idx={index} />
            ))}
          </div>
          <DiscountList items={discountItems} />
        </div>
        <div className='ThankYou'>
          <img src = "./images/thankyouimage.jpg" alt = "Thank you For shopping"  />
          <p>
            Your order has been confirmed.  We accepted your order and we are getting it ready. A confirmation email has been sent to brannyG@gmail.com. 
          </p>
          <div className='CustomerInfo'>
            <div>
              <div>
                <h3>Customer information</h3>
                <p>Name: Branny Gravlin</p>
              </div>
              <div>
                <h3>Shipping address</h3>
                <p>Addision Best
                  8, Awesome Str.
                  Ottawa OT BDG 1DF
                  Canada.</p>
              </div>
              <div>
                <h3>Payment method</h3>
                <p>Apple Pay</p>
              </div>
            </div>
            <div className='CustomerShipment'>
              <p>Your order is scheduled for delivery on <bold>10th July, 2024.</bold> <a href = "#" >Click here</a> to track the order</p>
            </div>
          </div>
          <div className='ConfirmButton'>
            <ButtonComponent label="Continue Shopping"/>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}


const SingleCartProduct = ({ cart, idx }) => {
  return (
    <div className="w-full flex justify-between p-15 m-10 ">
      <div className="flex justify-center items-center w-28 h-24 border-bg2 py-2 px-2 border-2 rounded-lg"> <div className="flex rounded-lg justify-center items-center overflow-hidden"><img className='w-24 h-fit object-cover' src={cart.imageUrl} /></div></div>
      <div className="flex flex-col">
        <span className ="ListDescriptionComponent">{cart.category}</span>
        <span className ="ListDescriptionComponent">Qty{cart.quantity}</span>
        
      </div>
      <div className="ListPrice">
        <span>${cart.total}<br/>${cart.price}</span>

      </div>

    </div>
  )
}

