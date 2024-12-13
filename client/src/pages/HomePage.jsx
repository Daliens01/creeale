import React from 'react'
import Cards from '../Components/cards';
import DescriptionPage from '../Components/DescriptionPage';
const HomePage = () => {
    return (
        <div className='p-10'>
            <Cards />
            <DescriptionPage />
        </div>
    );
}

export default HomePage;