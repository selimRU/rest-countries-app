import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [coutries, setCountris] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [flags, setFlags] = useState([])
    useEffect(() => {
        const countries = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all')
                const data = await res.json()
                // console.log(data);
                setCountris(data)
            } catch (error) {
                error => console.log(error);
            }
        }
        countries()
    }, [])

    const handleVisitedCountries = (country) => {
        const newCountries = [...visitedCountries, country]
        setVisitedCountries(newCountries)
    }

    const handleSetFlags = (flag) => {
        const newFlags = [...flags, flag]
        setFlags(newFlags)
    }
    const handleDeleteCountries = (id) => {
        const remaingVisitedCountries = visitedCountries.filter(vCountry => vCountry.cca3 !== id)
        setVisitedCountries(remaingVisitedCountries)
    }

    const handleDeleteFlags = () => {
        setFlags([])
    }
    return (
        <div>
            <button onClick={handleDeleteFlags} className=' ml-[47%] bg-red-500 px-2 py-2 my-3 rounded-md mr-3 text-white'>Flag Delete</button>
            <div>
                {
                    flags.map((flag, idx) => <img className='w-[100px] px-5 py-2' key={idx} src={flag} alt="" />)
                }
            </div>
            <p className={`text-3xl px-5 ${visitedCountries.length > 0 ? 'text-cyan-400' : 'text-lime-600'}`}>Visited Countries: {visitedCountries.length}</p>
            <ul>
                {
                    visitedCountries.map((visitedCountry) => <li className='px-5 py-2' key={visitedCountry.cca3}>{visitedCountry.name.common}<button onClick={() => handleDeleteCountries(visitedCountry.cca3)} className=' ml-3 bg-red-500 px-2 py-2 rounded-md mr-3 text-white'>Delete Country</button></li>)
                }
            </ul>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center px-5 py-10'>
                {
                    coutries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleSetFlags={handleSetFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;