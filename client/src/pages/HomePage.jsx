import React from 'react'
import logo from "../assets/AI2.png"
import Cards from '../Components/cards';
import DescriptionPage from '../Components/DescriptionPage';
import ClientsReview from "../Components/ClientsReview"
const HomePage = () => {
    return (
        <div className='my-40 min-[320px]:mx-6 md:mx-20'>
            <div className='text-center'>
                 
                <h1 >
                    Con CreeAle puedes buscar los mejores diseños para tus eventos, con diseños personalizados sin limitaciones.
                    Paga con anticipio y comunicate con nuestros diseñadores para empezar a disfrutar
                </h1>
            </div>
            <Cards />
            <DescriptionPage />
            <ClientsReview />
        </div>
    );
}

export default HomePage;