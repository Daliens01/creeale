import React from 'react'
import Ai from "../assets/AI2.png"
import { useNavigate } from 'react-router-dom';
import { Navbar as Nextnav, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Navbar = () => {
    const navigate = useNavigate()
    return (

        <Nextnav isBordered className='bg-pink-100'>
            <NavbarBrand>
                <img className='size-16 cursor-pointer' src={Ai} onClick={() => {
                    navigate("/")
                }} />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/contacto">
                        Contacto
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="/diseños" color="secondary">
                        Servicios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/faq">
                        Preguntas frecuentes
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login" color='secondary'>Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button color="secondary" onPress={() => {
                        navigate("/signup")
                    }} variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Nextnav>

    );
}

export default Navbar;