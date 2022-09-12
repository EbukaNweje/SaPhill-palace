import React, { useState } from 'react'
import "../Css/styleC.css"
import "../Css/mobileC.css"
import Logo from "../asset/SaPhill Palace2.png"
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineUser } from 'react-icons/hi'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import Mobile from './Mobile';
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../components/Global/ProductState"
import { useNavigate  } from "react-router-dom"


const Header = () => {
  const hist = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.persisitedReducer.bookings);
  const GetUser = useSelector((state) => state.persisitedReducer.GetUser);
  const id = JSON.parse(localStorage.getItem("User"))
  const admin = GetUser.isAdmin
  console.log("this   is the user",GetUser.name)
  
  const [toggle, setToggle] = useState(false)
    const onToggle = () => {
        setToggle(!toggle)
    }

    // useEffect(() => {
    //   dispatch(addId());
    //   console.log("My id is",addId())
    // }, [dispatch]);

  return (
    <div className='MainHeadder'>
    <div className='Header'>
      <div className='HeaderWrapper'> 
          <div className='Logo' onClick={() => hist('/')}><img src={Logo}  alt="Logo"/> SaPhill Palace</div>
          <div className='SearchDiv'> 
            <div className='SearchDivInner'>
              <div className='AllList'> All </div>
              <div className='AllList2'> 
              {
                toggle ? <AiOutlineClose className='Menu' 
                onClick={()=>{
                    onToggle()
                }}
                 /> :
                <AiOutlineMenu className='Menu' onClick={()=>{
                    onToggle()
                }}/>
            }
               </div>
              <input type='text' placeholder='what do you whant to buy?'/>
              <button> Search </button>
            </div>
          </div>
          <div className='MenuDiv'> 
          <div className='IconAdd'>
                     <AiOutlineShoppingCart className='Icons' onClick={() => hist('/cart')}/>
                   <span className='NumAdd'>{cart.length}</span>
              </div>
            <ul className='UserDeee'> 
            {
              !id ? <HiOutlineUser className='Icons' onClick={() => hist('/Registration')}/> :<HiOutlineUser className='Icons' onClick={() => hist('/')}/>
            }
               {
                 !id?
                <ul onClick={() => hist('/Registration')}>
                <li> Log in </li> 
                <li> Register </li> 
                </ul>
                : 
                <ul onClick={() => hist('/')} className='userD' >
                  <li>{id.message}</li>
                </ul>
               }
            </ul>
            {
              admin ? <li onClick={() => hist('/AdminDashboard')} className='dashddd'><MdOutlineSpaceDashboard className='Icons'/></li> : null
            }
            {
              GetUser.name ? 
              <ul>
              <li onClick={()=>{
                    localStorage.removeItem("User");
                    dispatch(signOut())
                  }} className='signoutd' >Sign Out</li>
              </ul> : ""
            }
          </div>
      </div>
    </div>
          { toggle ? ( 
            <Mobile toggle={toggle} setToggle={setToggle}/> 
          ): null }
    </div>
  )
}

export default Header