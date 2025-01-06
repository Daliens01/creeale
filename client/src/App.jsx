import { Route, BrowserRouter, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login.jsx"
import Designs from './pages/Designs.jsx'
import ContactUs from "./pages/ContactUs"
import Faq from "./pages/Faq"
import Navbar from './Components/navbar'
import Footer from './pages/Footer'
import { NextUIProvider } from "@nextui-org/react";

function App() {

  return (
    <NextUIProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/diseños' element={<Designs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contacto' element={<ContactUs />} />
          <Route path='/faq' element={<Faq />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NextUIProvider>
  )
}

export default App
