import './App.css'
import './responsive.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { faCcPaypal }  from '@fortawesome/free-brands-svg-icons';
import { faApple }  from '@fortawesome/free-brands-svg-icons';
import DiscountList from './DiscountList'
import ButtonComponent from './ButtonComponent'
import CheckBoxComponent from './CheckBoxComponent'
import ButtonIcon from './ButtonIcon'


  const cartItems = [
    {
      imageUrl: './images/hero16.jpg',
      category: 'Sensei ceramic',
      quantity: 2,
      price: 60.00,
      total: 120.00
    },

    {
      imageUrl: './images/hero2.jpg',
      category: 'Sensei ceramic',
      quantity: 1,
      price: 15.00,
      total: 15.00
    },
    {
      imageUrl: './images/hero5.jpg',
      category: 'Sensei ceramic',
      quantity: 1,
      price: 15.00,
      total: 15.00
    },
  ];


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
        <div className='OrderForm'>
          <div className='OrderFormButton'>
            <ButtonIcon label="Pay with" icon={ faCcPaypal }  />
            <ButtonIcon label="Pay with" icon={ faApple }  />
          </div>
          <span className='FormNames'>
            <div >
              <p>First name</p>
              <input type='text' placeholder='First name'/>
            </div>
            <div>
              <p>Last name</p>
              <input type='text' placeholder='Last name'/>
            </div>
          </span>
          
            <div className='FormShipping'>
              <p>Shipping </p>
              <input type='text' placeholder='Street address'/>
            </div>
          <div className='FormShipping'>
            <input type='text' placeholder='Appartment/suite number'/>
          </div>
          <span className='FormNames'>
              <input type='text' placeholder='City'/>

              <input type='text' placeholder='State'/>
          </span>
          <span className='FormNames'>
              <input type='text' placeholder='Zip Code'/>

          </span>
           
            <div className='FormShipping'>
              <input type='email' placeholder='Email address'/>
            </div>
            <div className='FormShipping'>
              <input type='number' placeholder='Contact number'/>
            </div>
          <div>
            <CheckBoxComponent label="Save this shipping information"/>
          </div>
          <div>
            <div className='FormPayment'>
              <p>Pay with</p>
              <span>
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-cc-paypal"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
              </span>
            </div>
            <div className='FormShipping'>
              <p>Contact Information </p>
              <input type='text' placeholder='Card number'/>
            </div>
            <span className='FormNames'>
                <input type='text' placeholder='Expiration Date (MM/YY)'/>

                <input type='text' placeholder='CVV'/>
            </span>
            <div className='FormCheckbox'>
              <CheckBoxComponent label="I agree to the Privacy policy and Terms and Conditons"/>
            </div>
            <div className='ConfirmButton'>
              <ButtonComponent label="Confirm Payment"/>
            </div>
          </div>
          
          
        </div>
      </div>
      <Footer/>
    </main>
  )
}

const SingleCartProduct = ({ cart, idx }) => {
  return (
        <div className="w-full flex justify-between p-5 m-1 ">
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
