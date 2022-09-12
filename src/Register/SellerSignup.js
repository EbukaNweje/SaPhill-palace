import React, {useState} from 'react'

const SellerSignup = () => {
const [login, setLogin] = useState(true)
const [register, setRegister] = useState(false)   
const [email, setRemail] = useState()
const [password, setPassword] = useState("")
const [name, setrname] = useState("")
const [lemail, setLemail] = useState("")
const [lpassword, setLpassword] = useState("")
  return (
    <div className='SellerRegistercont'>
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
                    <p className='reglink'>Forgot your password?</p>
                    </article>
                    <button className='Registerbtn'>Log in</button>
            </section>
         </div>) : register? (
        
         
          <div className='Registercard2'>
              <div className='RegisterAcct'>
              Register An Account
         </div>
            <section className='RegistercardInput'>
            <input className='RegisterInput' type="text" placeholder='FirstName' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='LastName' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='StoreName' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='Address Line One' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='Address Line Two' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='CityTown' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='State/ Coruntry' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="file" placeholder='Upload CAC Document' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='Phone number' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='Poster Code' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='Product Type' value={name} onChange ={(e)=>{setrname(e.target.value)}}/>
            <input className='RegisterInput' type="text" placeholder='email' value={email} onChange ={(e)=>{setRemail(e.target.value)}}/>
                <input className='RegisterInput' type="password" placeholder='password' value={password} onChange ={(e)=>{setPassword(e.target.value)}}/>
                    <button className='Registerbtn2'>Register</button>
            </section>
            
          </div> 
          
         ) : null
    
    
          }
          </div>
  )
}

export default SellerSignup