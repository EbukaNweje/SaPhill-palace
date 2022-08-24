import React from 'react'
import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage"
import Cart from './components/Cart';
import Booking from './components/Booking';
import Details from './components/Details';
import ProductPage from './components/ProductPage';
import AdminDash from './DashboardPage/AdminDash';
import Registration from './Register/Registration';
import FooterMain from './footer/FooterMain';

const App = () => {
  
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/paymentForm' element={<Booking/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/Details/:id' element={<Details/>}/>
      <Route path='/AdminDashboard' element={<AdminDash/>} />
      <Route path='/ProductPage/:id/:CartigoriesName' element={<ProductPage/>}/>
    </Routes>
    <FooterMain/>
  </BrowserRouter>

  )
}

export default App