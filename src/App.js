import React from 'react'
import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './components/Index';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Booking from './components/Booking';



const App = () => {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/paymentForm' element={<Booking/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App