import { useEffect } from "react"
import RandomPokemonGif from "./Pokedex"
import { useState } from "react"



const PokemonPicture = () => {

    const [pokemon, setPokemon] = useState(RandomPokemonGif())

    useEffect((): void => {
        handleNextPokemon()
        console.log(pokemon)
    }, [])

    function handleNextPokemon(): void {
        setPokemon(RandomPokemonGif())
        console.log(pokemon)
    }

    return (
        <div className="pokemon-picture-container border">
            <div className="black pokemon-picture" style={{ backgroundImage: `url('${pokemon.image}')` }} onClick={handleNextPokemon} />
        </div>
    )
}

export default PokemonPicture