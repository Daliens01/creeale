import logo from "../assets/AI2.png"
import WhatsappLogo from "../assets/ContactIcons/whatsapp.svg"
import FacebookLogo from "../assets/ContactIcons/facebook.svg"

const Footer = () => {
    return (
        <footer className="bg-zinc-600">
            <div className=" text-white justify-items-center">
                <div className="grid grid-cols-2">
                    <img src={logo} className=" min-[320px]:size-16 md:size-40  border-1"></img>
                    <h2 className=" border-1">Pagina creada por Heberto y Alejandra, todos los derechos reservados a ellos.</h2>
                    <div className="my-5 grid grid-cols-subgrid col-span-3 ">
                        <div className="col-start-2">
                            <div className="flex  border-1 ">
                                <img src={WhatsappLogo} className="cursor-pointer min-[320px]:size-5 md:size-10 "></img>
                                <a className="cursor-pointer">+ 52 1 923 321 3322</a>
                            </div>
                            <div className="flex   border-1">
                                <img src={FacebookLogo} className="cursor-pointer min-[320px]:size-5 md:size-10"></img>
                                <a className="cursor-pointer">CreeAle pagina oficial</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer