import { useEffect, useState } from "react";
import Country from "../country/country";

const Countries = () => {
    const [countries,setcountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data));
    },[])
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {
                countries.map(country=><Country key={country.cca3} country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;