// import React, { useEffect, useState } from 'react'
// import "./CSS/Dashboard.css"
// import "./CSS/DashMobile.css"
// import Axios from "axios"
// import { useSelector } from "react-redux";

// const AddProduct = () => {
//     const [cat, setCat] = useState([])
//     const [image, setImage] = useState()
//     const [name, setName] = useState("")
//     const [price, setPrice] = useState(0)
//     const [quantity, setQuantity] = useState(0)
//     const [description, setDescription] = useState("")
//     // const [data, setData ] = useState({
//     //     name : "",
//     //     price : "",
//     //     quantity: "",
//     //     image: "",
//     //     description : ""
//     // })
//     const [catIdValue, setCatIdValue] = useState("");
    
//     const id = useSelector((state) => state.persisitedReducer.LogId);
//     const GetUser = useSelector((state) => state.persisitedReducer.GetUser);
//     // console.log(GetUser.token)
//     let token = GetUser.token
//     // console.log(token)

//     const catchId =(id)=>{
//         // const show = id
//         setCatIdValue(id)
//         // console.log(catIdValue);
//         // console.log(id)
//     }

//     const UploadImage = (e) =>{
//         const file = e.target.files[0];
//         // let Myfile = file.name
//         const src = URL.createObjectURL(file);
        
//         setImage(src)
//         // console.log(src)
//         // const newdate = { ...data }
//         // newdate[e.target.value] = Myfile
//         // setData(newdate)
//         // newdate.image = Myfile
        
        
//         // console.log(newdate)
//     }
//     // console.log(image)

//     const GetCat = ()=>{
//         Axios.get("https://saphill-palace.herokuapp.com/user/allcat")
//         .then(res =>{setCat(res)})
//     }
//     // const GetAdmin = ()=>{
//     //     Axios.get("https://saphill-palace.herokuapp.com/user/")
//     //     .then(res =>{setAdmin(res)})
//     // }

//      const urlPost = `https://saphill-palace.herokuapp.com/user/add/${id}/${catIdValue}`
//     //  const urlPost = `https://saphill-palace.herokuapp.com/user/add/62eba239de0e72fbfc19edb0/62ebaabd314bed49450544fd`
//     const addProduct = async (e)=>{
//         e.preventDefault()
//         try{
//             console.log(name, price, quantity, description, image, catIdValue, id)

//         const formData = new FormData();
//         formData.append("image", image)
//         formData.append("price", price);
//         formData.append("quantity", quantity);
//         formData.append("description", description);

//         const verify = {
//             headers: {
//                 authorization :`Ebuka ${token}`,
//                 // authorization :`Ebuka eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJhMjM5ZGUwZTcyZmJmYzE5ZWRiMCIsImVtYWlsIjoibGVra2lAZ21haWwuY29tIiwibmFtZSI6Ikxla2tpIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjYxMzYzODU2LCJleHAiOjE2NjE0NTAyNTZ9.dnVMye7sDO6_pnP1ELFSQEUYl1GUDkzBuD-w6xehMMI`
//             },
//         }
//         const config = {
//            headers: {
//             "content-type": "multipart/form-data",
//            },
//         }
//         await Axios.post(urlPost, formData , verify, config)
//         }catch(err){
//             console.log(err)
//         }

//     }
//     const newcat = {...cat.data}
//     const dataCat = Object.values(newcat)
//     const getCats = dataCat[0]
//     const Mycat = {...getCats}
//     const dataCats = Object.values(Mycat)
//     // const [value, setValue] = useState("click again");
    
//     // const catData = dataCats.pop(0, dataCats.length - 9)
//     // console.log(dataCats)

//     // const Addmin = {...admin.data}
//     // const AdminD = Object.values(Addmin)
//     // const AddminID = AdminD[0]
//     // const Adminid = {...AddminID}
//     // console.log(Adminid._id)*
    
//     // const handle = (e) => 
//     //     const newdate = { ...data }
//     //     newdate[e.target.id] = e.target.value
//     //     setData(newdate)
//     //     console.log(newdate)
//     //   }

// useEffect(()=>{
//     GetCat()
//     // console.log(id)
//     // GetAdmin()
// },[])


//   return (
//     <div className='AddProduct'>
//         <h2> Add New Products </h2>

//         <div className='AddProduct1'> 
//             <h6> Product Name</h6>
//             <input type='text'  onChange={(e)=> setName(e.target.value) } id="name" value={name}/> 
//         </div>

//         <div className='AddProduct2'>
//             <div className='AddProduct2In'> 
//                 <h6> Price </h6>
//                 <input type='text' onChange={(e)=> setPrice(e.target.value) } id="price" value={price} /> 
//             </div>

//             <div className='AddProduct2In'> 
//                 <h6> Stock </h6>
//                 <input type='text' onChange={(e)=> setQuantity(e.target.value) } id="quantity" value={quantity}/>
//             </div>
//         </div>

//         <div className='AddProduct3'>
//             <h6> Description </h6>
//             <textarea  onChange={(e)=> setDescription(e.target.value) } id="description" value={description}/>
//         </div>

//         <div className='AddProduct4'> 
//             <div className='ImgShow'> 
//                 <img src={image} alt='produtimage'/>
//              </div>
//             <input type='file' id='pix' hidden  onChange={UploadImage}/>
//             <label htmlFor='pix' 
//                 onChange={(e)=> UploadImage(e) }
//             > Upload Image </label> 
//         </div>

//         <div className='AddProduct5'> 
//             <h3> Categories </h3>

//             <div className='AddProduct5a'> 
//                 <div className='AddProduct5In'>
//                     {
//                         dataCats.map((CatItem)=>(
//                             <button style={{width: "20px"}} onClick={()=> catchId(CatItem._id)}>{CatItem.name}</button>
//                         ))
//                     }
                   
//                     <h4> </h4>
//                 </div>
//             </div>
            
//         </div>

//         <div className='BtnDiv'> <button onClick={(e) => addProduct(e)}> Add Product </button> </div>
//     </div>
//   )
// }

// export default AddProduct




import React, {useState} from "react"
import styled from "styled-components"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
// import {Link, useParams, useNavigate} from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux";



const Create = ()=>{
//   const navigate = useNavigate()
  const Mycart = useSelector((state) => state.persisitedReducer.Mycat);
    const [imageDB, setImageDB] = useState("")
    const [avatar, setAvatar] = useState("")
    const [toggle, setToggle] = useState(false)
    const [cati, setCati] = useState("")
    // console.log(Mycart)

    // const id = useSelector((state) => state.persisitedReducer.LogId);
    const GetSell = useSelector((state) => state.persisitedReducer.GetSell);
    // const GetUser = useSelector((state) => state.persisitedReducer.GetUser);
    // let token = GetUser.token
    const SellerId = GetSell.data._id

    const yupModel = yup.object().shape({
        name: yup.string().required("This has to be filled"),
        description: yup.string().required("This has to be filled"),
        quantity: yup.number().required("This has to be filled"),
        price: yup.number().required("This has to be filled"),
        // Categories: yup.string().required("This has to be filled"),
    })
    
    const {register, reset, handleSubmit, formState:{errors}} =
    useForm({resolver: yupResolver(yupModel)})

    const File = (e)=>{
        const file = e.target.files[0];
        const save = URL.createObjectURL(file);
        setAvatar(save);
        setImageDB(file);
    }

    const addProduct = handleSubmit (async (data)=>{
      try{
        setToggle(!toggle)
        const {name, description, quantity, price} = data
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("image", imageDB);
      const config = {
        headers: {
          "content-type": "multipart/formData"
        }
      }
    //   const verify = {
    //         headers: {
    //             authorization :`Ebuka ${token}`,
    //         },
    //     }
    // console.log(Mycart)

      await axios.post(`https://saphill-palace.herokuapp.com/api/seller/create/${SellerId}/${cati}`, formData, config)
      reset()
      }catch(error){
        if (error.response) {
          console.log(error.response.data.message)
          console.log(error.response.status);
          console.log(error.response.headers);
          } else if (error.request) {
              console.log(error.request);
              } else {
                  console.log('Error', error.message);
              }
              console.log(error.config);
      }
    })
    
    return(
        <Container>
            <Wrapper>
            <Card type="multipart/form-data" onSubmit={addProduct}>
                <Image src={avatar} alt=""/>
                    <Button htmlFor="pix">Upload</Button>
                    <input type= "file" id="pix" style={{display: "none"}} onChange={File}/>
                    <Label>{errors.name && <p>Please enter the Name.</p>}</Label>
                    <Input placeholder="Name" {...register("name")}/>
                    <Label>{errors.name && <p>Please enter the Quantity.</p>}</Label>
                    <Input placeholder="Quantity" {...register("quantity")}/>
                    <Label>{errors.name && <p>Please enter the Price.</p>}</Label>
                    <Input placeholder="Price" {...register("price")}/>
                    <Label>{errors.manifesto && <p>Please enter the description.</p>}</Label>
                    <Inputs placeholder="Description" {...register("description")}/>
                    <select
                     value={cati}
                     onChange={(e) => setCati(e.target.value)}
                    //  {...register("Categories")}
                    >
                        <option>Choose a Categories</option>
                            {
                                Mycart.map((mycat)=> (
                                    <option value={mycat._id} key={mycat._id}>{mycat.name}</option>
                                ))
                            }
                    </select>
                    {
                      toggle? <Buttons>Adding Product...</Buttons>: <Buttons type="submit">Add Product</Buttons>
                    }
            </Card>
            </Wrapper>
        </Container>
    )
}
export default Create

const Container = styled.div`
    width: 100%;
    min-height: calc(200vh - 70px);
`
const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Card = styled.form`
    width: 300px;
    min-height: 500px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: white; */
    box-shadow: 0px 3px 10px rgba(0,0,0,0.6);
`
const Button = styled.label`
    background-color: rgba(153, 82, 208, 0.9);
    font-size: 16px;
    border-radius: 5px;
    padding: 5px 40px;
    transform: scale(1);
    transition: all 350ms;
    margin-top: 10px;
    color: white;
    :hover{
        cursor: pointer;
        transform: scale(1.002);
        transition: all 350ms;
        box-shadow: 0px 3px 10px rgba(0,0,0,0.4);
    }
`
const Input = styled.input`
    width: 200px;
    height: 40px;
    border-radius: 3px;
    border: 0.3px solid grey;
    /* background-color: rgb(49,53,55); */
    outline: none;
    margin-top: 10px;
    font-size: 18px;
    color: grey;
    :focus{
        border: 0.3px solid rgba(153, 82, 208, 0.9);
        color: grey;
        font-size: 18px;
        padding: 0 5px;
    }
    ::placeholder{
        color: grey;
        font-size: 18px;
        padding: 0 5px;
    }
    @media Screen and (max-width: 768px){
        height: 30px;
        width: 80%;
    }
`
const Inputs = styled.textarea`
        width: 80%;
        min-height: 100px;
        margin-top: 10px;
        padding: 12px 20px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 0.3px solid grey;
        /* background-color: rgb(49,53,55); */
        font-family: poppins;
        resize: none;
        color: grey;
        :focus{
        border: 0.3px solid purple;
        color: grey;
        font-size: 18px;
        padding: 0 5px;
        } 
        @media Screen and (max-width: 768px){
        height: 30px;
        width: 80%;
    }
`
const Image = styled.img`
    object-fit: cover;
    width: 100px;
    height: 100px;
    border-radius: 100%;
`
const Buttons = styled.button`
    background-color: rgba(153, 82, 208, 0.9);
    font-size: 16px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 10px 40px;
    transform: scale(1);
    transition: all 350ms;
    margin-top: 10px;
    color: white;
    :hover{
        cursor: pointer;
        transform: scale(1.005);
        transition: all 350ms;
        box-shadow: 0px 3px 10px rgba(0,0,0,0.4);
    }
`
// const Wrappers = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
// `
// const Texts = styled.div`
//   padding: 30px 0;
//   font-size: 40px;
//   font-family: poppins;
//   text-align: center;
//   font-weight: 600;
//   span{
//     color: #3c34a8;
//   };
//   @media Screen and (max-width: 425px){
//     font-size: 30px;
//   }
// `
// const Holders = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `
// const Cards = styled.div`
//   width: 250px;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 0.5px solid white;
//   background-color: #21132D;
//   border-radius: 3px;
//   padding: 5px 0;
//   transform: scale(1);
//   transition: all 350ms;
//   margin: 5px;
//   :hover{
//     cursor: pointer;
//     transform: scale(1.005);
//     transition: all 350ms;
//     box-shadow:  5px 5px 10px rgba(225, 225, 255,0.4);
//   }
// `
// const Images = styled.img`
//   width: 90%;
//   height: 150px;
//   border-radius: 2px;
//   background-color: lightgrey;
//   margin:5px 0 ;
//   transform: scale(1);
//   transition: all 350ms;
//   object-fit: cover;
//   :hover{
//     cursor: pointer;
//     transform: scale(1.003);
//     transition: all 350ms;
//     box-shadow:  5px 5px 10px rgba(0,0,0,0.4);
//   }
// `
// const Names = styled.div`
//   width: 90%;
//   min-height: 40px;
//   display:flex;
//   justify-content:center;
//   font-weight: bold;
//   align-items: center;
//   color: lightgrey;
//   font-size: 20px;
//   border-radius: 2px;
//   margin-top: 5px;
//   background-color: rgba(153, 82, 208, 0.7);
//   transform: scale(1);
//   transition: all 350ms;
//   :hover{
//     cursor: pointer;
//     transform: scale(1.003);
//     transition: all 350ms;
//     box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
//   }
// `
// const Titles = styled.div`
//   width: 90%;
//   min-height: 100px;
//   display:flex;
//   justify-content:center;
//   align-items: center;
//   color: white;
//   text-align: center;
//   font-size: 16px;
//   margin-top: 5px;
//   background-color: rgba(153, 82, 208, 0.3);
//   transform: scale(1);
//   transition: all 350ms;
//   overflow-y: scroll;
//   :hover{
//     cursor: pointer;
//     transform: scale(1.003);
//     transition: all 350ms;
//     box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
//   }
// `
// const Votes = styled.div`
//   width: 90%;
//   min-height: 40px;
//   display:flex;
//   justify-content:center;
//   align-items: center;
//   color: lightgrey;
//   font-size: 20px;
//   margin-top: 5px;
//   background-color: rgba(153, 82, 208, 0.7);
//   transform: scale(1);
//   transition: all 350ms;
//   :hover{
//     cursor: pointer;
//     transform: scale(1.003);
//     transition: all 350ms;
//     box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
//   }
// `
const Label = styled.label`
    
`
// const Buttoner = styled.div`
//     text-decoration: none;
//     background-color: rgba(153, 82, 208, 0.9);
//     font-size: 20px;
//     border-radius: 5px;
//     padding: 10px 50px;
//     transform: scale(1);
//     transition: all 350ms;
//     margin-top: 10px;
//     color: white;
//     :hover{
//         cursor: pointer;
//         transform: scale(1.002);
//         transition: all 350ms;
//         box-shadow: 0px 3px 10px rgba(0,0,0,0.4);
//     }
// `
// const Voter = styled.div`
//   margin-top: 100px;
//   text-decoration: none;
//   width: 100px;
//   min-height: 40px;
//   display:flex;
//   justify-content:center;
//   border-radius: 5px;
//   align-items: center;
//   color: white;
//   font-size: 16px;
//   /* margin-top: 10px; */
//   margin-bottom: 20px;
//   background-color: rgba(25, 25, 25, 0.7);
//   transform: scale(1);
//   transition: all 350ms;
//   :hover{
//     cursor: pointer;
//     transform: scale(1.003);
//     transition: all 350ms;
//     box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
//   }
// `