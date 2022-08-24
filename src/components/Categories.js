import React from 'react'
import Cartigories from "../components/Cartigories.json"
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const hist = useNavigate();
  return (
    <div className='Categories'>
        <div className='CategoriesDiv'> 
            <h4> + </h4>
            <h4> Sell on SaPhill Palace </h4>
        </div>     

        {
            Cartigories.map((CartigoriesS)=>(
                <div className='CategoriesDiv' key={CartigoriesS.id} onClick={() => hist(`/ProductPage/${CartigoriesS.id}/${CartigoriesS.CartigoriesName}`)}> 
                    <h4> + </h4>
                    <h4> {CartigoriesS.CartigoriesName} </h4>
                </div> 
            ))
        }    


    </div>
  )
}

export default Categories