import React from 'react'
// import Cartigories from "../components/Cartigories.json"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Categories = () => {
    const hist = useNavigate();
    const Mycart = useSelector((state) => state.persisitedReducer.Mycat);
    // const newCat = Mycart.slice(1,Mycart.length)
    const removeCat = '62fcb1c2472321cf48c56124'
    const removeCatTwo = '62ebaabd314bed49450544fd'

    const newCatarr = Mycart.filter((id)=> id._id !== removeCat &&  id._id  !== removeCatTwo)

    // console.log("This is my cat ",newCat)

  return (
    <div className='Categories'>
        <div className='CategoriesDiv'> 
            <h4> + </h4>
            <h4> Sell on SaPhill Palace </h4>
        </div>     

        {
            newCatarr.map((CartigoriesS)=>(
                <div className='CategoriesDiv' key={CartigoriesS._id} onClick={() => hist(`/ProductPage/${CartigoriesS._id}/${CartigoriesS.name}`)}> 
                    <h4> + </h4>
                    <h4> {CartigoriesS.name} </h4>
                </div> 
            ))
        }    


    </div>
  )
}

export default Categories