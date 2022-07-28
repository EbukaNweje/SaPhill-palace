import React from 'react'
import "../Css/style.css"
import "../Css/mobile.css"
import {AiFillShop} from "react-icons/ai"
import {MdOutlineWatch} from "react-icons/md"
import {IoBagSharp} from "react-icons/io5"
import {SiMakerbot} from "react-icons/si"
import {GiLoincloth, GiBallerinaShoes, GiHairStrands, GiSunglasses, GiApolloCapsule, GiJewelCrown, GiBeltArmor } 
     from "react-icons/gi"

const Mobile = ({setToggle, toggle}) => {
    console.log(toggle)
  return (
    <div className='MobileMenu'>
        <nav className='Nav'>
            <ul>
                <li onClick={()=>{
                setToggle()
            }}> <AiFillShop className='Micon'/>Sell on SaPhill Palace</li>
                <li onClick={()=>{
                setToggle()
            }}> <GiLoincloth className='Micon'/>SaPhill Clothes</li>
                <li onClick={()=>{
                setToggle()
            }}> <GiBallerinaShoes className='Micon'/>SaPhill Shoes</li>
                <li onClick={()=>{
                setToggle()
            }}><MdOutlineWatch className='Micon'/>SaPhill Watches</li>
                <li onClick={()=>{
                setToggle()
            }}> <GiHairStrands className='Micon'/>SaPhill Hairs</li>
                <li onClick={()=>{
                setToggle()
            }}> <SiMakerbot className='Micon'/>SaPhill Make-up</li>
                <li onClick={()=>{
                setToggle()
            }}> <GiSunglasses className='Micon'/>SaPhill Glasses</li>
                <li onClick={()=>{
                setToggle()
            }}> <IoBagSharp className='Micon'/>SaPhill Bags </li>
                <li onClick={()=>{
                setToggle()
            }}> <GiApolloCapsule className='Micon'/> SaPhill Caps</li>
                <li onClick={()=>{
                setToggle()
            }}> <GiJewelCrown className='Micon'/>SaPhill Jewelries</li>
                <li onClick={()=>{
                setToggle()
            }}> <GiBeltArmor className='Micon'/>SaPhill Belt</li>
            </ul>
        </nav>
    </div>
  )
}

export default Mobile