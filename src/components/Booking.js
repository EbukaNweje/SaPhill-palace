import React, {useEffect, useState} from 'react'
import "../Css/style.css"
import "../Css/mobile.css"
import PaymentIMG from "../asset/paystack-wc.png"
import { useDispatch, useSelector } from "react-redux";
import {
  // addProduct,
  // addBooking,
  // changeDays,
  // removeBooking,
  totalState,
} from "./Global/ProductState";

import paystackpop from "@paystack/inline-js"
import Function from '../services/Function';

const Booking = () => {
  const data = useSelector((state) => state.persisitedReducer.bookings);
  const dispatch = useDispatch();
  const totalCostState = useSelector(
    (state) => state.persisitedReducer.totalRoomCost
  );



  // let TakaName = data.map((p)=> p)
  // console.log()

  // const Datatxt = JSON.stringify(data)
  // // const takedata = JSON.parse(Datatxt)
  // console.log(Datatxt)

  
  useEffect(() => {
    dispatch(totalState());
  }, [dispatch, data]);

  const [debitCard, setDebitCard] = useState(true)
  const [payOnDelivering, setPayOnDelivering] = useState(false)

  const [bookingDetails, setBookingDetails] = useState ({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    town: '',
    state: '',
    phone: '',
    emailAddress: '',
    payOnDelivering: payOnDelivering,
    debitCard: debitCard,
    OrderInfo: data,
    AmountPaid: totalCostState + 1000,
  })

 

      const handle = (e) => {    
        const newBooking = { ...bookingDetails }
        newBooking[e.target.id] = e.target.value
        setBookingDetails(newBooking)
        // console.log(newBooking)
      }
      
      const Payment = () => {
        const paystacks = new paystackpop()
        paystacks.newTransaction({
          key : "pk_test_eb4a2b89137430977625cc3ec9b485bf21568d98",
          firstName: bookingDetails.firstName,
          lastName: bookingDetails.lastName,
          email: bookingDetails.emailAddress,
          amount: (totalCostState + 1000 )* 100,

          onSuccess : async (transaction) =>{
            let message = `Payment Complete! Reference ${transaction.reference}`
            alert(message)
            await Function.addOrder(bookingDetails);

          },
          onCancel(){
            alert("You have cancellwed thwe transaction")
          }
        })
        
      }

        // const prdtData = data.map((datum) => datum)
        // console.log(prdtData)

     const PaymentD = async () => {
        try {
            await Function.addOrder(bookingDetails);
            // setMessage({ error: false, msg: "Added successfully!" });
            console.log("Added successfully!")
        }catch (err) {
            console.log(err.message)
        }
     }

      
      
  


  return (
    <div className='BookingWrapper'>
      <article className='BookingWrapperArticle'>
        <div className='BookingWrapperleft'> 
          <h2> Billing details </h2>

          <div className='BookingWrapperLeftInfo'>
            <label> First name <span> * </span> </label>
            <input type="text" onChange={(e)=> handle(e) } id='firstName' value={bookingDetails.firstName} />
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Last name <span> * </span> </label>
            <input type="text" onChange={(e)=> handle(e) } id='lastName' value={bookingDetails.lastName} />
          </div>

          <div className='BookingWrapperLeftInfo'>
            <label> Company name (optional) </label>
            <input type="text" onChange={(e)=> handle(e) } id='companyName' value={bookingDetails.companyName} />
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Country / Region <span> * </span> </label>
            <input type="text" onChange={(e)=> handle(e) } id='country' value={bookingDetails.country}  />
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Street address <span> * </span> </label>
            <input type="text" placeholder="House number and street name" onChange={(e)=> handle(e) } id='streetAddress' value={bookingDetails.streetAddress}/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Town / City <span> * </span> </label>
            <input type="text" onChange={(e)=> handle(e) } id='town' value={bookingDetails.town}/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> State <span> * </span> </label>
            <input type="text" onChange={(e)=> handle(e) } id='state' value={bookingDetails.state}/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Phone  <span> * </span> </label>
            <input type="text" onChange={(e)=> handle(e) } id='phone' value={bookingDetails.phone}/>
          </div>
          
          <div className='BookingWrapperLeftInfo'>
            <label> Email address <span> * </span> </label>
            <input type="text" onChange={(e)=> handle(e) } id='emailAddress' value={bookingDetails.emailAddress}/>
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

              {
                data.map((OrderP)=>(
                   <div className='BookingWrapperRightInfo_2_1'> 
                      <h6> {OrderP.name}  × {OrderP.QTY} </h6>
                      <h6> {OrderP.price * OrderP.QTY} </h6>
                    </div> 
                ))
              }

              <div className='BookingWrapperRightInfo_2_2'> 
                <h4> Subtotal </h4>
                <h4> ₦ {totalCostState} </h4>
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
              <h3 className='BookingWrapperRightInfo_4_color'> ₦ {totalCostState + 1000} </h3>
            </div>

            <div className='BookingWrapperRightInfo_5'>
              <div className='BookingWrapperRightInfo_5_1'> 
                <h6> Debit/Credit Cards </h6>
                <div className='BookingWrapperRightInfo_5_1_In'> 
                  <input type='radio' name='RadioChk' value='debitCard' id='debitCard' onClick={()=>{
                    setDebitCard(true)
                    setPayOnDelivering(false)
                  }} onChange={(e)=> handle(e) }  />
                  <img src={PaymentIMG} alt="PaymentIMGs"/>
                </div>
                <span> Make payment using your debit and credit cards </span>
              </div>

              <div className='BookingWrapperRightInfo_5_2'> 
                <div className='BookingWrapperRightInfo_5_2_In'> 
                  <input type='radio' name='RadioChk' value='payOnDelivering' id='payOnDelivering'onClick={()=>{
                    setDebitCard(false)
                    setPayOnDelivering(true)
                  }} onChange={(e)=> handle(e) } />
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

          {
            debitCard ? (<div className='BookingWrapperRightOrder' onClick={Payment}> Place order </div>) : 
           payOnDelivering ? (<div className='BookingWrapperRightOrder' onClick={PaymentD}> Place D </div>) : null
            
          }

        </div>
      </article>
    </div>
  )
}

export default Booking