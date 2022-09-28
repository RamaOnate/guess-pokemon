import React from "react";
import { PokemonContext } from "../App"

const Keyboard = () => {

    const { lettersSelected } = React.useContext(PokemonContext)


    const handleSelectedKey = (event: any) => {
        const letterClickd = event.target.innerText.toLowerCase()

        // push unique letters to lettersSelected
        if (!lettersSelected.includes(letterClickd)) {
            lettersSelected.push(letterClickd)
        }
        event.target.classList.add("disabled-text-key")
        event.target.classList.remove("key-box")
    }

    return (
        <div className="keyboard border">

            <div className="keyboard-row">
                <div className="key-box" onClick={handleSelectedKey}>Q</div>
                <div className="key-box" onClick={handleSelectedKey}>W</div>
                <div className="key-box" onClick={handleSelectedKey}>E</div>
                <div className="key-box" onClick={handleSelectedKey}>R</div>
                <div className="key-box" onClick={handleSelectedKey}>T</div>
                <div className="key-box" onClick={handleSelectedKey}>Y</div>
                <div className="key-box" onClick={handleSelectedKey}>U</div>
                <div className="key-box" onClick={handleSelectedKey}>I</div>
                <div className="key-box" onClick={handleSelectedKey}>O</div>
                <div className="key-box" onClick={handleSelectedKey}>P</div>
            </div>

            <div className="keyboard-row">
                <div className="key-box" onClick={handleSelectedKey}>A</div>
                <div className="key-box" onClick={handleSelectedKey}>S</div>
                <div className="key-box" onClick={handleSelectedKey}>D</div>
                <div className="key-box" onClick={handleSelectedKey}>F</div>
                <div className="key-box" onClick={handleSelectedKey}>G</div>
                <div className="key-box" onClick={handleSelectedKey}>H</div>
                <div className="key-box" onClick={handleSelectedKey}>J</div>
                <div className="key-box" onClick={handleSelectedKey}>K</div>
                <div className="key-box" onClick={handleSelectedKey}>L</div>
            </div>

            <div className="keyboard-row">
                <div className="key-box" onClick={handleSelectedKey}>Z</div>
                <div className="key-box" onClick={handleSelectedKey}>X</div>
                <div className="key-box" onClick={handleSelectedKey}>C</div>
                <div className="key-box" onClick={handleSelectedKey}>V</div>
                <div className="key-box" onClick={handleSelectedKey}>B</div>
                <div className="key-box" onClick={handleSelectedKey}>N</div>
                <div className="key-box" onClick={handleSelectedKey}>M</div>
            </div>

        </div>

    )
}

export default Keyboard