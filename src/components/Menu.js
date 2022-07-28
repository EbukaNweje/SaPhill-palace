import React from 'react'
import "../Css/style.css"
import "../Css/mobile.css"
import {AiFillShop} from "react-icons/ai"
import {MdOutlineWatch} from "react-icons/md"
import {IoBagSharp} from "react-icons/io5"
import {SiMakerbot} from "react-icons/si"
import {GiLoincloth, GiBallerinaShoes, GiHairStrands, GiSunglasses, GiApolloCapsule, GiJewelCrown, GiBeltArmor } 
from "react-icons/gi"

const Menu = () => {
  return (
    <div>
 <nav className='Nav'>
            <ul>
                <li> <AiFillShop className='Micon'/>Sell on SaPhill Palace</li>
                <li> <GiLoincloth className='Micon'/>SaPhill Clothes</li>
                <li> <GiBallerinaShoes className='Micon'/>SaPhill Shoes</li>
                <li> <MdOutlineWatch className='Micon'/>SaPhill Watches</li>
                <li> <GiHairStrands className='Micon'/>SaPhill Hairs</li>
                <li> <SiMakerbot className='Micon'/>SaPhill Make-up</li>
                <li> <GiSunglasses className='Micon'/>SaPhill Glasses</li>
                <li> <IoBagSharp className='Micon'/>SaPhill Bags </li>
                <li> <GiApolloCapsule className='Micon'/> SaPhill Caps</li>
                <li> <GiJewelCrown className='Micon'/>SaPhill Jewelries</li>
                <li> <GiBeltArmor className='Micon'/>SaPhill Belt</li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu