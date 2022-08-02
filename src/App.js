import React from 'react'
import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './components/Index';
import Footer from './components/Footer';

const App = () => {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Index />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App