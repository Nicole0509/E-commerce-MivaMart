import './App.css'
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
