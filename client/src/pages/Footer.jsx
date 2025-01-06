import logo from "../assets/AI2.png"
import WhatsappLogo from "../assets/ContactIcons/whatsapp.svg"
import FacebookLogo from "../assets/ContactIcons/facebook.svg"
const Footer = () => {
    return (
        <footer className="bg-zinc-600">
            <div className="container mx-auto px-2 text-white">
                <div className="flex justify-around">
                    <div>
                        <img src={logo} className="size-40"></img>
                    </div>
                    <div>
                        <h2>Pagina creada por Heberto y Alejandra, todos los derechos reservados a ellos.</h2>
                        <div className="flex flex-row p-5">
                            <img src={WhatsappLogo} className="size-10 cursor-pointer"></img> 
                            <a className="cursor-pointer">+ 52 1 923 321 3322</a>
                        </div>
                        <div className="flex flex-row p-5">
                            <img src={FacebookLogo} className="size-10 cursor-pointer"></img>
                            <a className="cursor-pointer">CreeAle pagina oficial</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer