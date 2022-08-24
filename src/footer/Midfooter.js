import React from 'react'
import "../footer/CSS/style.css"
import "../footer/CSS/mobile.css"

const Midfooter = () => {
  return (
    <div className='Midfooterbody'>
        <div className='Midfootercontact'>
            <h4 className='Midfooterus'>CONTACT US</h4>
            <p className='callus'> call us 24/7</p>
            <span>
                <p>08039262657</p>
                <p>08056574122</p> 
                 <p>09150991684</p>
                 </span>
            <article>
                <h4>ADRESSES:</h4>
                <h4>Lagos Branch:</h4>
                 <p>23 Bale Street along boundary Road,
                 Ajeromi-Ifelodun LGA, Lagos</p>
                <h4>PortHarcourt Branch:</h4>
                 <p>23 Akulo Plaza, east-west road, By NTA
                 Apara link rd, Rumuigbo.</p>
                 <div className='footercall'>
                 <h5>Call:</h5>
                 <p> 07030969081</p>
                 </div>
            </article>
        </div>
        <div className='Midfooterlinks'>
            <h4>Useful Links</h4>
            <p>FAQ</p>
            <p>Contact Us</p>
            <p>Truckspoint</p>
            <p>Terms and Conditions</p>
        </div>
        <div className='Midfooterlinks'>
            <h4>Let Us Help You</h4>
            <p>Sell on Xpresspoint</p>
            <p>Seller policy</p>
            <p>Privacy policy</p>
            <p>Return policy</p>
        </div>
    </div>
  )
}

export default Midfooter