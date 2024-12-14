import React from 'react'
import Ai from "../assets/AI.png"
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="bg-red-200 my-3 flex justify-between  px-10  
        shadow-xl top-0 overflow-hidden sticky " >
            <div>
            <img className='size-24 cursor-pointer' src={Ai} onClick={()=>{
                navigate("/")
            }}/>
            </div>
            <ul className=" flex gap-x-2 p-4 ">
                
                <li className='mx-3'>
                    <a href='/contacto' className="text-2xl font-bold">Contacto</a>
                </li>
                <li className='mx-3'>
                    <a href='/diseños' className="text-2xl font-bold">Servicios</a>
                </li>
                <li className='mx-3'>
                    <a href='/diseños' className="text-2xl font-bold">Preguntas frecuentes</a>
                </li>
                <li className='ml-10'>
                <button onClick={()=>{
                    navigate("/login")
                }}
                 className="bg-blue-300 px-3 py-2 rounded-md"
                type="submit">Login</button>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;