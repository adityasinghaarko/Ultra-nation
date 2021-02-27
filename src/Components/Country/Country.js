import React from 'react';
const Country = (props) => {
    const {name,population,region,flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle={
        height:'50px'
    }
    const countryStyle = {
        border: '1px solid',
        margin: '10px',
        padding:'10px',
        borderRadius: '10px'
    }
    return (
        <div style={countryStyle}>
            <div>
                <h2>This is{name}</h2>
                <p>Population:{population}</p>
                <p><small>Region:{region}</small></p>
                <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
            </div>
            <div>
                <img style={flagStyle} src={flag} alt=""/>
            </div>
        </div>
        
    );
};

export default Country;