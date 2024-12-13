import { Route, BrowserRouter, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login.jsx"
import Designs from './pages/Designs.jsx'
import ContactUs from "./pages/ContactUs"
import Navbar from './Components/navbar'
import Footer from './pages/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/diseños' element={<Designs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacto' element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
