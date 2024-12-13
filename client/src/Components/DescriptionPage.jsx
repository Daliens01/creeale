import descriptionImg from "../assets/plotter.jpeg"

const DescriptionPage = () =>{
    return(
        <div className="p-40 flex flex-row">
            <p className="text-justify">CreeAle Diseños, es una compañia de diseños personalizados creados con viniles usando cortadores especializados.
                Entre los diseños que se encuentran, se pueden crear vasos personalizados, globos personalizados,
                tarjetas, manualidades como cajas, implmentación de diseños personalizados en textiles como ropa o bolsas.
                CreeAle presenta diseños propios que han gustado a todos nuestros clientes. Animate y encuentra la mejor opción para ti.
            </p>
            <img className='size-96' src={descriptionImg}/>
        </div>
    )
}

export default DescriptionPage