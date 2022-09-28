import React from "react"
import { PokemonContext } from "../App"

const PokemonPicture = () => {

    const { pokemon } = React.useContext(PokemonContext)

    return (
        <div className="pokemon-picture-container border">
            <div className="black pokemon-picture" style={{ backgroundImage: `url('${pokemon.image}')` }} />
        </div>
    )
}

export default PokemonPicture