import React, { useState} from 'react'
import '../Register/Css/style.css'
import Axios from "axios"
import { addId, GetUser } from "../components/Global/ProductState"
import {useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

const Register = () => {
const dispatch = useDispatch();
const navigate = useNavigate()

const [login, setLogin] = useState(true)
const [register, setRegister] = useState(false)
const [email, setRemail] = useState()
const [password, setPassword] = useState("")
const [name, setrname] = useState("")
const [lemail, setLemail] = useState("")
const [lpassword, setLpassword] = useState("")

const url = "https://saphill-palace.herokuapp.com/user/register"
const urlL = "https://saphill-palace.herokuapp.com/user/login"

  const RegisterUser = (e)=>{
    // e.preventDefault()
    Axios.post(url,{
      name: name,
      password: password,
      email: email
    })
    .then(res=>{ console.log(res)})
    .then({
      name: "",
      password: "",
      email: ""
    })
  }
  // const reset = ()=>{
  //     setLemail("")
  //     setLpassword("")
  // }

   const Login = () =>{
        Axios.post(urlL,{
          password: lpassword,
          email: lemail
        })
        .then((res) => {
          localStorage.setItem("User", JSON.stringify(res.data));
        const getUser = JSON.parse(localStorage.getItem("User"))
        dispatch(addId(getUser.data._id))
        dispatch(GetUser(getUser.data))
        console.log(res)
        }
        )
        .then(()=>{
          alert("Succcessful")
          navigate("/")
        })
        .catch((error)=>{
        alert("jfdkbkjdkf")
        console.log(error)
        //  reset(),
      })
    }

  return (      
    <div className='Registercont'>
       <div className='RegisterDiv'>
         <span className='RegisterText'>
           {
             login?(
               <div>
            <button className='RegisterLog' onClick={()=> {
              setLogin(true)
              setRegister(false)
            }}>Log in</button>
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
              <button className='RegisterLog' onClick={()=>{
                setLogin(false)
                setRegister(true)
              }}>Register</button>
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
                <input className='RegisterInput' type="password" placeholder='password' value={lpassword} onChange ={(e)=>{setLpassword(e.target.value)}}/>
                <article className='RegisterArt'>
                    <div>
                    <input className='Registercheck' type="checkbox"/>
                    <p>Remember Me</p>
                    </div>
                    <p className='reglink'><a href='#'>Forgot your password?</a></p>
                    </article>
                    <button className='Registerbtn' onClick={()=> Login()}>Log in</button>
            </section>
         </div>) : register? (
        
         
          <div className='Registercard2'>
              <div className='RegisterAcct'>
              Register An Account
         </div>
            <section className='RegistercardInput'>
            <input className='RegisterInput' type="text" placeholder='Username' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='email' value={email} onChange ={(e)=>{setRemail(e.target.value)}}/>
                <input className='RegisterInput' type="password" placeholder='password' value={password} onChange ={(e)=>{setPassword(e.target.value)}}/>
                    <button className='Registerbtn2' onClick={(()=>RegisterUser())}>Register</button>
            </section>
            
          </div> 
          
         ) : null
    
    
          }
          </div>
  )
}

export default Register