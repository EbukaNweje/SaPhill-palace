import React, { useEffect, useState } from 'react'
import "./CSS/Dashboard.css"
import "./CSS/DashMobile.css"
import Axios from "axios"
import { useSelector } from "react-redux";

const AddProduct = () => {
    const [cat, setCat] = useState([])
    const [image, setImage] = useState()
    const [aveter, setAveter] = useState(image)
    const [name, setName ] = useState("")
    const [description, setDescription ] = useState("")
    const [price, setPrice ] = useState("")
    const [quantity, setQuantity ] = useState("")
    // const [catIdValue, setCatIdValue] = useState("");
    
    // const id = useSelector((state) => state.persisitedReducer.LogId);
    const GetUser = useSelector((state) => state.persisitedReducer.GetUser);
    // console.log(GetUser.token)
    let token = GetUser.token
    console.log(token)

    const catchId =(id)=>{
        // const show = id
        // setCatIdValue(id)
        // console.log(catIdValue);
        // console.log(id)
    }

    const UploadImage = (e) =>{
        const file = e.target.files[0];
        let Myfile = file.name
        const src = URL.createObjectURL(file);
        
        setImage(src)
        setAveter(Myfile)
        console.log(src)
        // const newdate = { ...data }
        // newdate[e.target.value] = src
        // setData(newdate)
        // newdate.Image = src
        
        
        // console.log(newdate)
    }
    // console.log(image)

    const GetCat = ()=>{
        Axios.get("https://saphill-palace.herokuapp.com/user/allcat")
        .then(res =>{setCat(res)})
    }
    // const GetAdmin = ()=>{
    //     Axios.get("https://saphill-palace.herokuapp.com/user/")
    //     .then(res =>{setAdmin(res)})
    // }

    //  const urlPost = `https://saphill-palace.herokuapp.com/user/add/${id}/${catIdValue}`
     const urlPost = `https://saphill-palace.herokuapp.com/user/add/62eba239de0e72fbfc19edb0/62ebaabd314bed49450544fd`
    const addProduct = async (e)=>{
        e.preventDefault()
        const fd = new FormData();
        fd.append("name", name)
        fd.append("description", description)
        fd.append("price", price)
        // fd.append("price", price)
        fd.append("quantity", quantity)
        fd.append("image", aveter)

        console.log(fd)
        const verify = {
            headers: {
                authorization :`Ebuka ${token}`
                // authorization :`Ebuka eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJhMjM5ZGUwZTcyZmJmYzE5ZWRiMCIsImVtYWlsIjoibGVra2lAZ21haWwuY29tIiwibmFtZSI6Ikxla2tpIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjYxMzYzODU2LCJleHAiOjE2NjE0NTAyNTZ9.dnVMye7sDO6_pnP1ELFSQEUYl1GUDkzBuD-w6xehMMI`
            }
        }
        const config = {
           headers: {
            "content-type": "multipart/form-data"
           }
        }
        // console.log("this is",aveter)
        await Axios.post(urlPost, fd, config, verify,)
        .then(res=>{ console.log(res)}).catch((err)=> console.log(err))
    }
    const newcat = {...cat.data}
    const dataCat = Object.values(newcat)
    const getCats = dataCat[0]
    const Mycat = {...getCats}
    const dataCats = Object.values(Mycat)
    // const [value, setValue] = useState("click again");
    
    // const catData = dataCats.pop(0, dataCats.length - 9)
    // console.log(dataCats)

    // const Addmin = {...admin.data}
    // const AdminD = Object.values(Addmin)
    // const AddminID = AdminD[0]
    // const Adminid = {...AddminID}
    // console.log(Adminid._id)*
    
    // const handle = (e) => {
    //     const newdate = { ...data }
    //     newdate[e.target.id] = e.target.value
    //     setData(newdate)
    //     console.log(newdate)
    //   }

useEffect(()=>{
    GetCat()
    // GetAdmin()
},[])


  return (
    <div className='AddProduct'>
        <h2> Add New Products </h2>

        <div className='AddProduct1'> 
            <h6> Product Name</h6>
            <input type='text' value={name}
                onChange={(e) => {setName(e.target.value); console.log(name)}}/> 
        </div>

        <div className='AddProduct2'>
            <div className='AddProduct2In'> 
                <h6> Price </h6>
                <input type='text'  id="ProductPrice" 
                value={price}
                onChange={(e) => {setPrice(e.target.value); console.log(price)}}
                />
            </div>

            <div className='AddProduct2In'> 
                <h6> Stock </h6>
                <input type='text' id="ProductStock" 
                    value={quantity}
                    onChange={(e) => {setQuantity(e.target.value); console.log(quantity)}}
                />
            </div>
        </div>

        <div className='AddProduct3'>
            <h6> Description </h6>
            <textarea  id="ProductDescription"  
                value={description}
                onChange={(e) => {setDescription(e.target.value); console.log(description)}}
            />
        </div>

        <div className='AddProduct4'> 
            <div className='ImgShow'> 
                <img src={image} alt='produtimage'/>
             </div>
            <input type='file' id='pix' hidden   onChange={UploadImage}/>
            <label htmlFor='pix'> Upload Image </label> 
        </div>

        <div className='AddProduct5'> 
            <h3> Categories </h3>

            <div className='AddProduct5a'> 
                <div className='AddProduct5In'>
                    {
                        dataCats.map((CatItem)=>(
                            <button style={{width: "20px"}} onClick={()=> catchId(CatItem._id)}>{CatItem.name}</button>
                        ))
                    }
                   
                    <h4> </h4>
                </div>
            </div>
            
        </div>

        <div className='BtnDiv'> <button onClick={(e) => addProduct(e)}> Add Product </button> </div>
    </div>
  )
}

export default AddProduct