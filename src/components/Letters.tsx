import React from "react"
import { PokemonContext } from "../App"

const Letters = () => {

    const { pokemon, lettersSelected } = React.useContext(PokemonContext)

    React.useEffect(() => {
        console.log(lettersSelected)
    }, [lettersSelected])


    const lettersDisplay = pokemon.name.split("").map((letter, index) => {
        if (lettersSelected.includes(letter)) {
            return <span key={index} className="letter">{letter}</span>
        } else {
            return <span key={index} className="letter">_</span>
        }
    })

    return (
        <div className="border">
            <div className="letter-placement">
                {lettersDisplay}
            </div>
        </div>
    )
}

export default Letters