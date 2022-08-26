import React, { useEffect, useState } from 'react'
import "./CSS/Dashboard.css"
import "./CSS/DashMobile.css"
import Axios from "axios"
import { useSelector } from "react-redux";

const AddProduct = () => {
    const [cat, setCat] = useState([])
    const [image, setImage] = useState()
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [description, setDescription] = useState("")
    // const [data, setData ] = useState({
    //     name : "",
    //     price : "",
    //     quantity: "",
    //     image: "",
    //     description : ""
    // })
    const [catIdValue, setCatIdValue] = useState("");
    
    const id = useSelector((state) => state.persisitedReducer.LogId);
    const GetUser = useSelector((state) => state.persisitedReducer.GetUser);
    // console.log(GetUser.token)
    let token = GetUser.token
    // console.log(token)

    const catchId =(id)=>{
        // const show = id
        setCatIdValue(id)
        // console.log(catIdValue);
        // console.log(id)
    }

    const UploadImage = (e) =>{
        const file = e.target.files[0];
        // let Myfile = file.name
        const src = URL.createObjectURL(file);
        
        setImage(src)
        // console.log(src)
        // const newdate = { ...data }
        // newdate[e.target.value] = Myfile
        // setData(newdate)
        // newdate.image = Myfile
        
        
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

     const urlPost = `https://saphill-palace.herokuapp.com/user/add/${id}/${catIdValue}`
    //  const urlPost = `https://saphill-palace.herokuapp.com/user/add/62eba239de0e72fbfc19edb0/62ebaabd314bed49450544fd`
    const addProduct = async (e)=>{
        e.preventDefault()
        try{
            console.log(name, price, quantity, description, image, catIdValue, id)

        const formData = new FormData();
        formData.append("image", image)
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("description", description);

        const verify = {
            headers: {
                authorization :`Ebuka ${token}`,
                // authorization :`Ebuka eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJhMjM5ZGUwZTcyZmJmYzE5ZWRiMCIsImVtYWlsIjoibGVra2lAZ21haWwuY29tIiwibmFtZSI6Ikxla2tpIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjYxMzYzODU2LCJleHAiOjE2NjE0NTAyNTZ9.dnVMye7sDO6_pnP1ELFSQEUYl1GUDkzBuD-w6xehMMI`
            },
        }
        const config = {
           headers: {
            "content-type": "multipart/form-data",
           },
        }
        await Axios.post(urlPost, formData , verify, config)
        }catch(err){
            console.log(err)
        }

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
    // console.log(id)
    // GetAdmin()
},[])


  return (
    <div className='AddProduct'>
        <h2> Add New Products </h2>

        <div className='AddProduct1'> 
            <h6> Product Name</h6>
            <input type='text'  onChange={(e)=> setName(e.target.value) } id="name" value={name}/> 
        </div>

        <div className='AddProduct2'>
            <div className='AddProduct2In'> 
                <h6> Price </h6>
                <input type='text' onChange={(e)=> setPrice(e.target.value) } id="price" value={price} /> 
            </div>

            <div className='AddProduct2In'> 
                <h6> Stock </h6>
                <input type='text' onChange={(e)=> setQuantity(e.target.value) } id="quantity" value={quantity}/>
            </div>
        </div>

        <div className='AddProduct3'>
            <h6> Description </h6>
            <textarea  onChange={(e)=> setDescription(e.target.value) } id="description" value={description}/>
        </div>

        <div className='AddProduct4'> 
            <div className='ImgShow'> 
                <img src={image} alt='produtimage'/>
             </div>
            <input type='file' id='pix' hidden  onChange={UploadImage}/>
            <label htmlFor='pix' 
                onChange={(e)=> UploadImage(e) }
            > Upload Image </label> 
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