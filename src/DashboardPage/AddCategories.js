import React, { useState } from 'react'
import "./CSS/Dashboard.css"
import "./CSS/DashMobile.css"
import Axios from "axios"

const AddCategories = () => {
  const url = "https://saphillpalaceback.up.railway.app/user/cat"
  const [data, setData] =useState({
    name: "",
  })

  const handle = (e) => {
    const newdate = { ...data }
    newdate[e.target.id] = e.target.value
    setData(newdate)
    console.log(newdate)
  }


  const submit = (e)=>{
    e.preventDefault()
    Axios.post(url,{
      name: data.name,
    })
    .then(res=>{ console.log(res)})
  }

  return (
    <div className='AddCategories'>
        <h2> Add Categiroies </h2>
        <input type='text'  onChange={(e)=> handle(e) } id="name" value={data.name} placeholder='Add New Categories'/>   
        <button onClick={(e) => submit(e)}> Add </button>
    </div>
  )
}

export default AddCategories