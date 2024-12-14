import React from 'react'
import Cards from '../Components/cards';
import DescriptionPage from '../Components/DescriptionPage';
import ClientsReview from "../Components/ClientsReview"
const HomePage = () => {
    return (
        <div className='p-40'>
            <div className='text-center mb-20'>
                <h1 className='justify-center '>
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