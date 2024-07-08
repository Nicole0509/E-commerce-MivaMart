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
