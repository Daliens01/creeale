import logo from "../assets/AI.png"

const Footer = ()=>{
    return(
        <footer className="bg-zinc-600">
           <div className="container mx-auto px-2 text-white">
           <div className="flex justify-around">
           <div>
           <img src={logo} className="size-40"></img>
           </div>
           <div>
           <h2>Pagina creada por Heberto y Alejandra, todos los derechos reservados a ellos.</h2>
           </div>
           </div>
           </div>
        </footer>
    )
}

export default Footer