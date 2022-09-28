import React from "react"
import { PokemonContext } from "../App"

const Hangman = () => {

    const { pokemon } = React.useContext(PokemonContext)

    return (
        <div className="hangman border">
            <div className="pokemon-picture" style={{ backgroundImage: `url('${pokemon.image}')` }} />
        </div>
    )
}

export default Hangman