import React, { useEffect, useState} from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Country from './Components/Country/Country';

function App() {
  const [addedCountries, setAddedCoutries] = useState([]);
  const handleAddCountry= (country) => {
    const newCountryList = [...addedCountries,country];
    setAddedCoutries(newCountryList)
  }
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div className="App">
      <h2>Countries added:{addedCountries.length}</h2>
      <Cart addedCountries={addedCountries}></Cart>
      {
        countries.map(country => <Country handleAddCountry={handleAddCountry} key={country.alpha3Code} country={country}></Country>)
      }
    </div>
  );
}

export default App;
