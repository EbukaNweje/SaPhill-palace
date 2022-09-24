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
import SellerRigister from './Register/SellerRigister';
import ScrollToTop from './components/ScrollToTop';
import Search from './components/Search';
import Privacy from './components/Privacy';
import Conditions from './components/Conditions';
import Contactus from './components/Contactus'
import Returnpolicy from './components/Returnpolicy';
import Faq from './components/Faq';


const App = () => {
  
  return (
  <BrowserRouter>
  <ScrollToTop />
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/paymentForm' element={<Booking/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/Details/:id' element={<Details/>}/>
      <Route path='/AdminDashboard' element={<AdminDash/>} />
      <Route path='/ProductPage/:id/:CartigoriesName' element={<ProductPage/>}/>
      <Route path='/SellerRegistration' element={<SellerRigister/>} />
      <Route path='/Search/:SearchName' element={<Search/>} />
      <Route path='/Privacy/' element={<Privacy/>} />
      <Route path='/Conditions/' element={<Conditions/>} />
      <Route path='/Help/' element={<Contactus/>} />
      <Route path='/Returnpolicy/' element={<Returnpolicy/>} />
      <Route path='/FAQ/' element={<Faq/>} />
    </Routes>
    <FooterMain/>
  </BrowserRouter>

  )
}

export default App