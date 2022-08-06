import React from 'react'
import "../Css/style.css"
import "../Css/mobile.css"
import {AiFillShop} from "react-icons/ai"
// import {MdOutlineWatch} from "react-icons/md"
// import {IoBagSharp} from "react-icons/io5"
import {SiMakerbot} from "react-icons/si"
// import {GiLoincloth, GiBallerinaShoes, GiHairStrands, GiSunglasses, GiApolloCapsule, GiJewelCrown, GiBeltArmor } 
//      from "react-icons/gi"
import Cartigories from "../components/Cartigories.json"
import { Link } from "react-router-dom";
const Mobile = ({setToggle, toggle}) => {
  // const hist = useNavigate();
    console.log(toggle)
  return (
    <div className='MobileMenu'>
        <nav className='Nav'>
            <ul>
                <li
                onClick={()=>{
                    setToggle()
                }}
                > <AiFillShop className='Micon'/>Sell on SaPhill Palace</li>
                {
                  Cartigories.map((Cartigories)=>(
                    <ul className='UlI' key={Cartigories.id}>
                    <Link to= {`/ProductPage/${Cartigories.id}/${Cartigories.CartigoriesName}`} className="Link">
                    <li 
                        onClick={()=> {
                            setToggle()
                        }}
                    ><SiMakerbot className='Micon'/>{Cartigories.CartigoriesName}</li>
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