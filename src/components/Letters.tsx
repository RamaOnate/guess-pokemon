import React from "react"
import { PokemonContext } from "../App"

const Letters = () => {

    const { guessedLetters } = React.useContext(PokemonContext)


    return (
        <div className="border">
            <div className="letter-placement">
                {guessedLetters.map((letter, index) => {
                    return (
                        <div key={index} className="letter">
                            {letter}
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Letters