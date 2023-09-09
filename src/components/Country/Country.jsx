import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountries, handleSetFlags }) => {
    const { flags, name, capital, cca3 } = country
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`py-3 border bottom-1 h-[500px] text-center space-y-5 ${visited ? 'bg-success' : 'bg-danger'}`}>
            <img className='w-[250px] h-[250px] mx-auto' src={flags.png} alt="" />
            <p className=' text-xl font-semibold'>Country: {name.common}</p>
            <p className=' text-xl font-semibold'>Capital: {capital}</p>
            <button onClick={() => handleVisitedCountries(country)} className=' bg-red-500 px-5 py-2 rounded-md mr-3 text-white'>Visited Countries</button>
            <button className=' bg-red-500 px-5 py-2 rounded-md mr-3 text-white' onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <button onClick={() => handleSetFlags(flags.png)} className=' bg-red-500 px-5 py-2 rounded-md mr-3 text-white'>Flags</button>
            {visited ? 'Ok' : 'No'}
        </div>
    );
};

export default Country;