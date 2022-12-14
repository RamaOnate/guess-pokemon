import React from "react"
import { PokemonContext } from "../App"

const Hangman = () => {

    const { wrongGuesses } = React.useContext(PokemonContext)

    return (
        <div className="hangman border centered-container">
            <div>
                <img className="hangman-image-container" src={wrongGuesses < 8 ? require(`../img/hangman${wrongGuesses}.png`) : ''} alt="hangman" />
            </div>
        </div>
    )
}

export default Hangman