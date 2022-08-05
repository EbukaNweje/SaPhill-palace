import React from 'react'
import "../Css/style.css"
import "../Css/mobile.css"
import PaymentIMG from "../asset/paystack-wc.png"

const Booking = () => {
  // const [firstName, setFirstName] = useState()
  // const [lastName, setLasttName] = useState()
  // const [companyName, setCompanyName] = useState()
  // const [country, setCountry] = useState()
  // const [address, setAddress] = useState()
  // const [town, setTown] = useState()
  // const [state, setState] = useState()
  // const [phone, setPhone] = useState()
  // const [email, setEmail] = useState()

  return (
    <div className='BookingWrapper'>
      <article className='BookingWrapperArticle'>
        <div className='BookingWrapperleft'> 
          <h2> Billing details </h2>

          <div className='BookingWrapperLeftInfo'>
            <label> First name <span> * </span> </label>
            <input type="text"/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Last name <span> * </span> </label>
            <input type="text"/>
          </div>

          <div className='BookingWrapperLeftInfo'>
            <label> Company name (optional) </label>
            <input type="text"/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Country / Region <span> * </span> </label>
            <input type="text"/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Street address <span> * </span> </label>
            <input type="text" placeholder="House number and street name"/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Town / City <span> * </span> </label>
            <input type="text"/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> State <span> * </span> </label>
            <input type="text"/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Phone  <span> * </span> </label>
            <input type="text"/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Email address <span> * </span> </label>
            <input type="text"/>
          </div>
          
        </div>

        <div className='BookingWrapperRight'> 
          <h2> Your order </h2>

          <div className='BookingWrapperRightInfo'>
            <div className='BookingWrapperRightInfo_1'>
              <h4> PRODUCT </h4>
              <h4> SUBTOTAL</h4>
            </div>
            <div className='BookingWrapperRightInfo_2'>
              <div className='BookingWrapperRightInfo_2_1'> 
                <h6> REDMI NOTE 10S 6GB/128GB  × 1 </h6>
                <h6> ₦134,500.00 </h6>
              </div>

              <div className='BookingWrapperRightInfo_2_1'> 
                <h6> REDMI NOTE 10S 6GB/128GB  × 1 </h6>
                <h6> ₦134,500.00 </h6>
              </div>

              <div className='BookingWrapperRightInfo_2_2'> 
                <h4> Subtotal </h4>
                <h4> ₦209,500.00 </h4>
              </div>
            </div>

            <div className='BookingWrapperRightInfo_3'>
              <div className='BookingWrapperRightInfo_3_1'>
                <h4> Shipping </h4>
              </div>
              <div className='BookingWrapperRightInfo_3_2'>
                <h5> Flat rate: </h5>
                <h5> ₦1,000.00 </h5>
              </div>
            </div>

            <div className='BookingWrapperRightInfo_4'>
              <h3> Total </h3>
              <h3 className='BookingWrapperRightInfo_4_color'> ₦210,500.00 </h3>
            </div>

            <div className='BookingWrapperRightInfo_5'>
              <div className='BookingWrapperRightInfo_5_1'> 
                <h6> Debit/Credit Cards </h6>
                <div className='BookingWrapperRightInfo_5_1_In'> 
                  <input type='radio' name='RadioChk'/>
                  <img src={PaymentIMG} alt="PaymentIMGs"/>
                </div>
                <span> Make payment using your debit and credit cards </span>
              </div>

              <div className='BookingWrapperRightInfo_5_2'> 
                <div className='BookingWrapperRightInfo_5_2_In'> 
                  <input type='radio' name='RadioChk'/>
                  <h6> Cash on delivery </h6>
                </div>
                <span> Pay with cash upon delivery. </span>  
              </div>


            </div>
          </div>

          <div className='BookingWrapperRightAgree'>
            <input type="checkbox"/>
            <label> I have read and agree to the website terms and conditions <span> * </span> </label>
          </div>

          <div className='BookingWrapperRightOrder'> Place order </div>
        </div>
      </article>
    </div>
  )
}

export default Booking