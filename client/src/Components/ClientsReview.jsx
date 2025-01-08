import starsIcon from "../assets/stars.png"

const ClientsReview = ()=>{
    return(
        <div className="my-8">
           <div className="">
           <h1>Persona de facebook</h1> 
           <div className="flex flex-row">
           <img src={starsIcon}/><img src={starsIcon}/><img src={starsIcon}/><img src={starsIcon}/><img src={starsIcon}/>
           </div>
            <p>
                Muy buenos diseños, de calidad y a buen precio. Lo recomiendo muchisimo
            </p>
           </div>
           <div className="">
           <h1>Persona de facebook</h1>
           <div className="flex flex-row">
           <img src={starsIcon}/><img src={starsIcon}/><img src={starsIcon}/><img src={starsIcon}/><img src={starsIcon}/>
           </div>
            <p>
                Muy buenos diseños, de calidad y a buen precio. Lo recomiendo muchisimo
            </p>
           </div>
        </div>
    )
}

export default ClientsReview