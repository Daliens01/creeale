import { useState } from 'react'
import {Route, BrowserRouter, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import Designs from './pages/Designs.jsX'
import Navbar from './Components/navbar'
import Footer from './pages/Footer'
function App() {

  return (
   <BrowserRouter>
     <Navbar />
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/diseños' element={<Designs/>}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
