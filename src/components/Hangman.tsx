import React from "react"
import { PokemonContext } from "../App"

const Hangman = () => {

    const { wrongGuesses } = React.useContext(PokemonContext)

    return (
        <div className="hangman border">
            <div className="centered-counter">
                <div className="pokemon-picture-container">{wrongGuesses} / 6</div>
                <div className="pokemon-picture-container">Wrong guesses</div>
            </div>
        </div>
    )
}

export default Hangman