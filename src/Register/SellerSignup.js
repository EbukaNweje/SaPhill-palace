import React, {useState} from 'react'
import Axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetSell } from "../components/Global/ProductState"
// import {useForm} from "react-hook-form"
// import {yupResolver} from "@hookform/resolvers/yup"
// import * as yup from "yup"

const SellerSignup = () => {
const navigate = useNavigate()
const dispatch = useDispatch();
  const Mycart = useSelector((state) => state.persisitedReducer.Mycat);
  const removeCat = '62fcb1c2472321cf48c56124'
  const removeCatTwo = '62ebaabd314bed49450544fd'
  const newCatarr = Mycart.filter((id)=> id._id !== removeCat &&  id._id  !== removeCatTwo)
  const [rname, setRname] = useState('')
  const [rlastname, setRlastname] = useState('')
  const [rstorename, setRstorename] = useState('')
  const [raddress1, setRaddress1] = useState('')
  const [raddress2, setRaddress2] = useState('')
  const [remail, setRemail] = useState('')
  const [rcity, setRcity] = useState('')
  const [rstate, setRstate] = useState('')
  const [rphone, setRphone] = useState('')
  const [rpost, setRpost] = useState('')
  const [rpass, setRpass] = useState('')
  const [rproduct, setRproduct] = useState('')
  const [register, setRegister] = useState(false)  
  const [lpass, setLpass] = useState('')  
  const [login, setLogin] = useState(true)  
  const [lemail, setLemail] = useState('')
  // const [checklog, setChecklog] = useState(false)
  const [message, setMessage] = useState({ error: false, msg: "" });
  const url = "https://saphill-palace.herokuapp.com/api/Seller/create"
  const urlL = "https://saphill-palace.herokuapp.com/api/Seller/login"

 



  const Registerfn =()=>{
    // console.log(rname,rlastname,rstorename,raddress1,raddress2,remail,rcity,rstate,rphone,rpost,rpass,rproduct,)

    Axios.post(url,{
      name: rname,
      lastName: rlastname,
      email: remail,
      storeName: rstorename,
      Address1: raddress1,
      Address2: raddress2,
      cityTown: rcity,
      stateCountry: rstate,
      password: rpass,
      storePhone: rphone,
      postCode: rpost,
      productType: rproduct
    })
    .then(() =>
     {
      setMessage({error: true, msg: "User Register successfully!" });
      setTimeout(() => {
        window.location.reload()
      }, [1000]);
     }
      ).catch(()=>{
        if(!rname || !remail || !rpass){
          setMessage({error: false, msg: "You need to fill all this from!" });
        }
      })
    }
    console.log(message)

    const Loginfn = () =>{
      if(!lemail || !lpass){
        setMessage({error: false, msg: "You need to fill all this from!" });
      }else{
        Axios.post(urlL,{
          password: lpass,
          email: lemail
        })
        .then((res) => {
        //   localStorage.setItem("User", JSON.stringify(res.data));
        // const getUser = JSON.parse(localStorage.getItem("User"))
        // dispatch(addId(getUser.data._id))
        dispatch(GetSell(res.data))
        // console.log(res)
        }
        )
        .then(()=>{
          setMessage({ error: true, msg: "successfully!" });
          setTimeout(() => {
            navigate("/")
          }, [2000]);
        })
        .catch((error)=>{
          setMessage({error: false, msg: "user not found" });
        console.log(error)
        //  reset(),
      })
      }
    }


  return (
    <div className='SellerRegistercont'>
       <div className='RegisterDiv'>
         <span className='RegisterText'>
           {
             login?(
               <div>
            <button className='RegisterLog'>Log in</button>
            <button className='RegisterReg' onClick={()=>{
              setLogin(false)
              setRegister(true)
            }}>Register</button>
            </div>
             ) : register? (
              <div>
              <button className='RegisterReg' onClick={()=> {
                setLogin(true)
                setRegister(false)
              }}>Log in</button>
              <button className='RegisterLog'>Register</button>
              </div>
             ) : null
          }
          </span>
        </div>
          {
            login? (
          <div className='Registercard'>
              <div className='RegisterAcct'>
               Log In Your Account
              </div>
            <section className='RegistercardInput'>
                <input className='RegisterInput' type="text" placeholder='email' value={lemail} onChange ={(e)=>{setLemail(e.target.value)}}/>
                <input className='RegisterInput' type="password" placeholder='password' value={lpass} onChange ={(e)=>{setLpass(e.target.value)}}/>
                <article className='RegisterArt'>
                    <div>
                    <input className='Registercheck' type="checkbox"/>
                    <p>Remember Me</p>
                    </div>
                    {/* <p className='reglink'>Forgot your password?</p> */}
                    </article>
                    <button onClick={()=>Loginfn()} className='Registerbtn'>Log in</button>
            </section>
         </div>) : register? (
        
         
          <div className='Registercard2'>
              <div className='RegisterAcct'>
              Register An Account
         </div>
            <form className='RegistercardInput'>
            <input className='RegisterInput' type="text" value={rname} onChange={e=> setRname(e.target.value)} placeholder='FirstName'/>
            <input className='RegisterInput' type="text" value={rlastname} onChange={e=> setRlastname(e.target.value)} placeholder='LastName'/>
            <input className='RegisterInput' type="text" value={rstorename} onChange={e => setRstorename(e.target.value)} placeholder='StoreName'/>
            <input className='RegisterInput' type="text" value={raddress1} onChange={e => setRaddress1(e.target.value)} placeholder='Address Line One'/>
            <input className='RegisterInput' type="text" value={raddress2} onChange={e => setRaddress2(e.target.value)} placeholder='Address Line Two'/>
            <input className='RegisterInput' type="text" value={rcity} onChange={e => setRcity(e.target.value)} placeholder='City/Town'/>
            <input className='RegisterInput' type="text" value={rstate} onChange={e => setRstate(e.target.value)} placeholder='State/ Country'/>
            <input className='RegisterInput' type="text" value={rphone} onChange={e => setRphone(e.target.value)} placeholder='Phone number'/>
            <input className='RegisterInput' type="text" value={rpost} onChange={e => setRpost(e.target.value)} placeholder='Poster Code'/>
            <select className='RegisterInput'
            value={rproduct}
            onChange={e => setRproduct(e.target.value)}
            >
              <option>Choose a Product</option>
                {
                  newCatarr.map((props)=>(
                    <option value={props.name} key={props._id}>{props.name}</option>
                  ))
                }
            </select>
            <input className='RegisterInput' value={remail} onChange={e => setRemail(e.target.value)} type="text" placeholder='email' />
                <input className='RegisterInput' value={rpass} onChange={e => setRpass(e.target.value)} type="password" placeholder='password'/>
                    <div onClick={()=>Registerfn()}  className='Registerbtn2'>Register</div>
            </form>
            
          </div> 
          
         ) : null
          }
          </div>
  )
  
}
export default SellerSignup;      
  