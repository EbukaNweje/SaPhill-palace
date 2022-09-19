import React, { useState } from 'react'
import "../Css/styleC.css"
import "../Css/mobileC.css"
import Logo from "../asset/SaPhill Palace2.png"
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineUser } from 'react-icons/hi'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import Mobile from './Mobile';
import { useSelector, useDispatch } from "react-redux";
import { signOut, search } from "../components/Global/ProductState"
import { useNavigate  } from "react-router-dom"
// import Search from './Search'
// import { useSelector } from "react-redux";


const Header = () => {
  const hist = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.persisitedReducer.bookings);
  const GetUser = useSelector((state) => state.persisitedReducer.GetUser);
    const MyProduct = useSelector((state) => state.persisitedReducer.AllProduct);
    const [searchinput, setSearchinput] = useState("")
     const filterSearch = ()=> {
        if(!searchinput){
          return
        }else{
          let find = MyProduct.filter((datum) => datum.name.toUpperCase().includes(searchinput.toUpperCase()))
          hist(`/Search/${searchinput}`)
          dispatch(search(find))
        }
    }
    // console.log("this is it",datasearch)
  const id = JSON.parse(localStorage.getItem("User"))
  const admin = GetUser.isAdmin
  // console.log("this   is the user",GetUser.name)
  
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
              <input type='text' placeholder='what do you whant to buy?' value={searchinput} onChange={(e)=> setSearchinput(e.target.value)}/>
              <button onClick={()=> filterSearch()}> Search </button>
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
                <ul id="UserNavigations" onClick={() => hist('/Registration')}>
                <li> Login </li> 
                {/* <li> Register </li>  */}
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
          </div>
            {
              GetUser.name ? 
              <ul className="signout">
              <li onClick={()=>{
                    localStorage.removeItem("User");
                    dispatch(signOut())
                  }} className='signoutd' >Sign Out</li>
              </ul> : ""
            }
      </div>
    </div>
          { toggle ? ( 
            <Mobile toggle={toggle} setToggle={setToggle}/> 
          ): null }
    </div>
  )
}

export default Header