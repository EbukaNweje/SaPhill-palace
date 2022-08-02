import React from 'react'
import { AiFillCar } from 'react-icons/ai';
import { FaRedoAlt, FaCcMastercard } from 'react-icons/fa';

const Deliv = () => {
  return (
    <div className='Deliv'>
        <div className='DelivCon'>
            <AiFillCar className='DelivIcon'/>
            <div className='DelivText'>
                <span>Our Delivery</span>
                <p>Quick and fast delivery</p>
            </div>
        </div>
        <div className='DelivCon'>
            <FaRedoAlt className='DelivIcon'/>
            <div className='DelivText'>
                <span>7 Days Return</span>
                <p>Quick and fast delivery</p>
            </div>
        </div>
        <div className='DelivCon'>
            <FaCcMastercard className='DelivIcon'/>
            <div className='DelivText'>
                <span>Secure Payment</span>
                <p>100% secure payment</p>
            </div>
        </div>
        <div className='DelivCon'>
            <AiFillCar className='DelivIcon'/>
            <div className='DelivText'>
                <span>24/7 Support</span>
                <p>Dedicated support</p>
            </div>
        </div>
    </div>
  )
}

export default Deliv