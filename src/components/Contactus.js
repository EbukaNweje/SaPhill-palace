import React, { useState} from 'react'
import '../Css/Faq.css'

const Contactus = () => {
    const [name,setName] = useState('')
    const [msg,setMsg] = useState('')
     const Upload = ()=> {
         if(name && msg) {
             alert('You will recieve a reply shortly!')
             window.location.reload()
         } else {
             alert('No field should be empty!')
         }
         
     }
  return (
      <div className='Hassancont'>
           <div className='Main_faq'>
        <input type="text"value={name} onChange={(event)=> setName(event.target.value)}  className='Input' placeholder='Username'/>
        <textarea value={msg} onChange={(event)=> setMsg(event.target.value)} name="" className='Faqtext' placeholder='what would you like to ask?' id="" cols="70" rows="25"></textarea>
        <button onClick={Upload} className='Postfaqbtn'>Post</button>
    </div>
      </div>
  )
}

export default Contactus