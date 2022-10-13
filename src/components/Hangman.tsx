import React from "react"
import { PokemonContext } from "../App"

const Hangman = () => {

    const { wrongGuesses } = React.useContext(PokemonContext)

    return (
        <div className="hangman border centered-container">
            <div>
                <img className="hangman-image-container" src={require(`../img/hangman${wrongGuesses}.png`)} alt="hangman" />
            </div>
            <div> {wrongGuesses} / 7</div>
            <div> Aciertos incorrectos</div>
        </div>
    )
}

export default Hangman