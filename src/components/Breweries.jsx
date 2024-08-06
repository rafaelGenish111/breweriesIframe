import React, { useEffect, useState } from 'react'
import BreweryDetails from './BreweryDetails'

export default function Breweries() {
    const [list, setList] = useState([])

    useEffect(() => {
        const load = async () => {
            const breweriesListRespons = await fetch("https://api.openbrewerydb.org/v1/breweries")
            const breweriesList = await breweriesListRespons.json()
            setList(breweriesList)
        }
        load()
    })

    return (
        <div>
            {
                list.map((brwry) =>
                    (<BreweryDetails  brwry={brwry} />)
               )
            }
        </div>
    )
}
