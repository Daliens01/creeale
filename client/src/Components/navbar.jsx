import React from 'react'
import Ai from "../assets/AI2.png"
import { useNavigate } from 'react-router-dom';
import {
    Navbar as Nextnav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";


const Navbar = () => {
    return (
        <Nav />
    );
}
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Contacto",
        "Servicios",
        "Preguntas Frecuentes",
        "Login"
    ];
    const navigate = useNavigate()
    return (

        <Nextnav isBordered className='bg-pink-100 sticky' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                <NavbarBrand>
                    <img className='size-16 cursor-pointer' src={Ai} onClick={() => {
                        navigate("/")
                    }} />
                </NavbarBrand>
            </NavbarContent>
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
                    <Link href="/register" color='secondary'>signup</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button color="secondary" onPress={() => {
                        navigate("/login")
                    }} variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
            <NavbarItem>
                    <Link color="foreground" href="/contacto">
                        Contacto
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link aria-current="page" href="/diseños">
                        Servicios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/faq">
                        Preguntas frecuentes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/register" color='secondary'>signup</Link>
                </NavbarItem>
            </NavbarMenu>
        </Nextnav>
    )
}

export default Navbar;