import { useState } from 'react'
import {Route, BrowserRouter, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import Designs from './pages/Designs.jsX'
import Navbar from "./Components/navbar"
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
     <Navbar />
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/designs' element={<Designs/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
