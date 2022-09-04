import React from 'react'
import "../footer/CSS/style.css"
import "../footer/CSS/mobile.css"
import Payment from "../asset/paystack-wc.png"

const Bottomfooter = () => {
  return (
    <div className='Bottomfootercont'>
        <p>© 2022 Saphill Palace. All Rights Reserved</p>
        <span>
            <p>We Accept:</p>
            <img src={Payment} alt='payment method'></img>
            </span>
    </div>

  )
}

export default Bottomfooter