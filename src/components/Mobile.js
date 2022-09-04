import React from 'react'
import "../Css/styleC.css"
import "../Css/mobileC.css"
import {AiFillShop} from "react-icons/ai"
import {SiMakerbot} from "react-icons/si"
// import Cartigories from "../components/Cartigories.json"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Mobile = ({setToggle, toggle}) => {
  const Mycart = useSelector((state) => state.persisitedReducer.Mycat);
  const removeCat = '62fcb1c2472321cf48c56124'
    const removeCatTwo = '62ebaabd314bed49450544fd'

    const newCatarr = Mycart.filter((id)=> id._id !== removeCat &&  id._id  !== removeCatTwo)
  // const hist = useNavigate();
    console.log(toggle)
  return (
    <div className='MobileMenu'>
        <nav className='Nav'>
            <ul className='UlI'>
                <li
                onClick={()=>{
                    setToggle()
                }}
                > <AiFillShop className='Micon'/>Sell on SaPhill Palace</li>
                {
                  newCatarr.map((Cartigories)=>(
                    <ul className='UlI' key={Cartigories._id}>
                    <Link to= {`/ProductPage/${Cartigories._id}/${Cartigories.name}`} className="Link">
                    <li 
                        onClick={()=> {
                            setToggle()
                        }}
                    ><SiMakerbot className='Micon'/>{Cartigories.name}</li>
                    </Link>
                  </ul>
                  ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default Mobile