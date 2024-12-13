import React from 'react'
import Ai from "../assets/AI.png"
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="bg-red-200 my-3 flex justify-between  px-10 rounded-lg 
        shadow-xl top-0 overflow-hidden sticky " >
            <div>
            <img className='size-24 cursor-pointer' src={Ai} onClick={()=>{
                navigate("/")
            }}/>
            </div>
            <ul className=" flex gap-x-2 p-4">
                
                <li>
                    <a href='/contacto' className="text-2xl font-bold">Contacto</a>
                </li>
                <li>
                    <a href='/diseños' className="text-2xl font-bold">Diseños</a>
                </li>

                <li>
                    <a href='/login' className="text-2xl font-bold">Login</a>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;