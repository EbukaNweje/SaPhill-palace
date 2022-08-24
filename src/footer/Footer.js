import React from 'react'
import "../footer/CSS/style.css"
import "../footer/CSS/mobile.css"

const Footer = () => {
  return (
    <div className='footercont'>
      <div className='footerDiv'>
      <div>
        <img src='Assets/rocket_100px.png' alt=''></img>
      </div>
        <div className='footertext'>
          <h4>Our Delivery</h4>
          <p>Quick and fast delivery</p>
        </div>
      </div>
      <div className='footerDiv'>
        <div>
          <img src='Assets/rocket_100px.png' alt=''/>
        </div>
        <div className='footertext'>
        <h4>7 Days Return</h4>
          <p>Terms and Conditions apply</p>
        </div>
      </div>
      <div className='footerDiv'>
      <div>
        <img src='Assets/rocket_100px.png' alt=''></img>
      </div>
        <div className='footertext'>
        <h4>Secure Payment</h4>
          <p>100% secure payment</p>
        </div>
      </div>
      <div className='footerDiv'>
      <div>
        <img src='Assets/rocket_100px.png' alt=''></img>
      </div>
        <div className='footertext footerlast'>
        <h4>24/7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default Footer