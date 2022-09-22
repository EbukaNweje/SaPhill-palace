import React from 'react'
import "../footer/CSS/style.css"
import { useNavigate } from 'react-router-dom'
import "../footer/CSS/mobile.css"

const Midfooter = () => {
    const Nav = useNavigate()
  return (
    <div className='Midfooterbody'>
        <div className='Midfootercontact'>
            <h4 className='Midfooterus'>CONTACT US</h4>
            <p className='callus'> call us 24/7</p>
            <span>
                <p> 08179637227 (whatsapp)</p>
                <p>09063747465 (call)</p> 
                 </span>
            <article>
                <h4>ADRESSES:</h4>
                <h4 className='FooterAdd'>Shop 68, Arcade Shopping Plaza, Italapo Road, Ijebu-Ode, Ogun State</h4>
                 <div className='footercall'>
                 
                 </div>
            </article>
        </div>
        <div className='Midfooterlinks'>
            <h4>Useful Links</h4>
            <p>FAQ</p>
            <p>Contact Us</p>
            <p onClick={()=> Nav('/Conditions')}>Terms and Conditions</p>
        </div>
        <div className='Midfooterlinks'>
            <h4>Ask Us A Question</h4>
            <p onClick={()=> Nav('/SellerRegistration')}>Sell on Saphill Palace</p>
            <p>Seller policy</p>
            <p onClick={()=> Nav('/Privacy')}>Privacy policy</p>
            <p>Return policy</p>
        </div>
    </div>
  )
}

export default Midfooter