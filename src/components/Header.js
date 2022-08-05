import React, { useState } from 'react'
import "../Css/style.css"
import "../Css/mobile.css"
import { AiOutlineClose, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi';
import Logo from "../asset/Logo.png"
import Mobile from './Mobile';
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom"


const Header = () => {
    const hist = useNavigate();
    const cart = useSelector((state) => state.persisitedReducer.bookings);
    const [toggle, setToggle] = useState(false)
    const onToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div className='Header'>
        <header>
            <div className='Logo'>
                <img src={Logo} alt='Logo'/>
                <h3  onClick={() => hist('/')}>SaPhill Palace</h3>
            </div>
            <article className='Search'>
                <select>
                    <option>All</option>
                    <option>SaPhill Clothes</option>
                    <option>SaPhill Shoes</option>
                    <option>SaPhill Watches</option>
                    <option>SaPhill Hairs</option>
                    <option>SaPhill Make-up</option>
                    <option>SaPhill Glasses</option>
                    <option>SaPhill Bags</option>
                    <option>SaPhill Belt</option>
                    <option>SaPhill Jewelries</option>
                    <option>SaPhill Caps</option>
                </select>
                <input type= "search" placeholder='what do you want to buy?'/>
                <AiOutlineSearch className='Sicon'/>
            </article>
            <div className='HeaderIcon'>
                {/* <div className='IconAdd'>
                    <AiOutlineHeart className='Icons'/>
                    <span className='NumAdd'>0</span>
                </div> */}
                <div className='IconAdd'>
                   <AiOutlineShoppingCart className='Icons' onClick={() => hist('/cart')}/>
                    <span className='NumAdd'>{cart.length}</span>
                </div>
                <div className='IconAdd Log'>
                    <HiOutlineUser className='Icons'/>
                    <h6>Log in Register</h6>
                </div>
            </div>
        </header>
            <div className='Mobile'>
            {
                toggle ? <AiOutlineClose className='Menu' 
                onClick={()=>{
                    onToggle()
                    // console.log(toggle)
                }}
                 /> :
                <AiOutlineMenu className='Menu' onClick={()=>{
                    onToggle()
                    // console.log(toggle)
                }}/>
            }
            <article className='SearchM'>
                <select>
                    <option>All</option>
                    <option>SaPhill Clothes</option>
                    <option>SaPhill Shoes</option>
                    <option>SaPhill Watches</option>
                    <option>SaPhill Hairs</option>
                    <option>SaPhill Make-up</option>
                    <option>SaPhill Glasses</option>
                    <option>SaPhill Bags</option>
                    <option>SaPhill Belt</option>
                    <option>SaPhill Jewelries</option>
                    <option>SaPhill Caps</option>
                </select>
                <input type= "search" placeholder='what do you want to buy?'/>
                <AiOutlineSearch className='SiconM'/>
            </article>
        </div>
          { toggle ? ( 
            <Mobile toggle={toggle} setToggle={setToggle}/> 
          ): null }
    </div>
  )
}

export default Header