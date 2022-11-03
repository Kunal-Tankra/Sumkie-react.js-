import React from 'react'
import { Link } from 'react-router-dom'

const FooterContact = () => {
  return (
    <div className='contacts'>
      <div className="contactInformation">
        <h5>contact information</h5>

        <div>
          <span className="material-icons-outlined location ">
            location_on
          </span>
          <p>
            Sumkie - Goggles Store
            507-Union Trade ipsum Doler Centre
            France
          </p>
        </div>

        <div>
          <span className="material-icons-outlined ">
            call
          </span>
          <p className='contactNumber'>123-456-7890</p>
        </div>

        <div>
          <span className="material-icons-outlined">
            email
          </span>
          <a style={{ textTransform: 'none' }} href="mailto:kunaltankra2002@gmail.com" >sales@yourcompany.com</a>
        </div>

      </div>

      <div className="products">
        <h5>products</h5>

        <ul>
          <li><Link to={'/'}>prices drop</Link></li>
          <li><Link to={'/'}>new products</Link></li>
          <li><Link to={'/'}>best sale</Link></li>
          <li><Link to={'/'}>contact us</Link></li>
          <li><Link to={'/'}>site map</Link></li>
        </ul>
      </div>

      <div className="ourcompany">
        <h5>our company</h5>

        <ul>
          <li><Link to={'/'}>delivery</Link></li>
          <li><Link to={'/'}>legal notice</Link></li>
          <li><Link to={'/'}>terams and condition of use</Link></li>
          <li><Link to={'/'}>about us</Link></li>
          <li><Link to={'/'}>secure payment</Link></li>
        </ul>
      </div>

      <div className="ourNewsLetter">
        <h5>our newsletter</h5>

        <p>Subscribe to our latest newsletter to get news about special discounts.</p>

        <div className="enterEmail">
          <input type="email" name="mail" className="email" placeholder="Enter Your email id" required onFocus={(e) => { e.target.placeholder = '' }} onBlur={(e) => { e.target.placeholder = 'enter your email id' }} />

          <span className="material-icons-outlined submitEmail">
            send
          </span>
        </div>
        
        <div className="playAppStore">
          <a href="https://www.apple.com/in/app-store/" target={'_blank'}>
            <img src="gallery/images/footer/stores/cms-footer-1.png" alt="playStore" />
          </a>

          <a href="https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclid=CjwKCAjwxOCRBhA8EiwA0X8hi5VRgiBKATHUpyuDHhCmraoqH4JqUpeP6jZj2CbWEpTx6MLpfyGQHBoCu0sQAvD_BwE&gclsrc=aw.ds" target={'_blank'}>
            <img src="gallery/images/footer/stores/cms-footer-2.png" alt="playStore" />
          </a>
        </div>
      </div>


    </div>
  )
}

export default FooterContact
