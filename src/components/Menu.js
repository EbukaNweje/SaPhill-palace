import React from 'react'
import "../Css/style.css"
import "../Css/mobile.css"
import {AiFillShop} from "react-icons/ai"
// import {MdOutlineWatch} from "react-icons/md"
// import {IoBagSharp} from "react-icons/io5"
import {SiMakerbot} from "react-icons/si"
// import {GiLoincloth, GiBallerinaShoes, GiHairStrands, GiSunglasses, GiApolloCapsule, GiJewelCrown, GiBeltArmor } 
// from "react-icons/gi"
import Cartigories from "../components/Cartigories.json"
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const hist = useNavigate();
  // console.log(Cartigories.CartigoriesName)
  // const DataMenu = {...Cartigories[0]}
  // const GetCartigories = Object.values(DataMenu)
  // console.log(GetCartigories)
  // let Icons = ["1","2", "3", "4", "5", "6", "7", "8"]
  // let IconsShow = Math.floor(Math.random()*Icons.length)
  // console.log(IconsShow)

  return (
    <div>
 <nav className='Nav'>
            <ul>
              <li><AiFillShop className='IconC'/>Sell on SaPhill Palace</li>
                {
                  Cartigories.map((Cartigories)=>(
                    <ul key={Cartigories.id}>
                    <li
                    onClick={() => hist(`/ProductPage/${Cartigories.id}/${Cartigories.CartigoriesName}`)}
                    ><SiMakerbot className='IconC'/>{Cartigories.CartigoriesName}</li>
                  </ul>
                  ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default Menu