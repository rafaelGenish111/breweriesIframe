import React from 'react'

export default function BreweryDetails({brwry}) {
    
  return (
    <div className='card'>
        <h1>{brwry.name}</h1>
        <h3>{brwry.brewery_type}</h3>
        <p>{brwry.address_1} {brwry.city}</p>
        <p>{brwry.state}</p>
    </div>
  )
}
