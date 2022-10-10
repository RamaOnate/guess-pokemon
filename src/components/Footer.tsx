const Footer = () => {

    const showPokemon = () => {
        /* if brightness from class black is 0, make it 100 */
        const black = document.querySelector(".black") as HTMLElement
        if (black.style.filter === "brightness(0%)") {
            black.style.filter = "brightness(100%)"
        } else {
            black.style.filter = "brightness(0%)"
        }
    }

    return (
        <div className="footer border">
            {/* switch to */}
            <div><button type="button" className="nes-btn is-success" onClick={showPokemon}>Show Pokemon</button></div>
            <div><a href="https://github.com/RamaOnate/guess-pokemon" ><i className="nes-icon github is-large"></i></a></div>
        </div>
    )
}

export default Footer