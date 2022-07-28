import React from 'react'
import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './components/Index';

const App = () => {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Index />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App