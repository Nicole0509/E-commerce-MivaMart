import './App.css'
import Logo from './Logo'
import ButtonComponent from './ButtonComponent'

export default function(){
  return(
    <div className='Footer'>
      <div className='FooterUpperContainer'>
        
        <div className='FooterContactSection'>
          <div className='FooterLogo'><Logo/></div>
          <div className='FooterContact'>
            <p>Join our mailing list</p>
            <input type = "text" placeholder='example@gmail.com'/>
            <ButtonComponent label="Submit"/>
          </div>
        </div>
        
        <div className='FooterMediaInfo'>
          <div className='FooterMedia'>
            <h3>Company</h3>
            <ul>
              <li>
                <a href='#'>Our story</a>
              </li>
              <li>
                <a href='#'>Products</a>
              </li>
              <li>
                <a href='#'>Terms & Conditions</a>
              </li>
              <li>
                <a href='#'>Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className='FooterMedia'>
            <h3>Social media</h3>
            <ul>
              <li>
                <a href='#'>Facebook</a>
              </li>
              <li>
                <a href='#'>Instagram</a>
              </li>
              <li>
                <a href='#'>X (Twitter)</a>
              </li>
            </ul>
          </div>
          <div className='FooterMedia'>
            <h3>Support</h3>
            <ul>
              <li>
                <a href='#'>Live chat</a>
              </li>
              <li>
                <a href='#'>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className='FooterPaymentMethod'>
          <i class="fa-brands fa-apple-pay"></i>
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-google-pay"></i>
          <div className='Footerpaypal'>
            <i class="fa-brands fa-paypal"></i>
            <i class="fa-brands fa-cc-paypal"></i>
          </div>
          
        </div>
        
      </div>
      <div className='FooterLowerContainer'><i class="fa-regular fa-copyright"></i>2024 MivaMart All right reserved.</div>
    </div>
  )
}