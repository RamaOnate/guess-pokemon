import './App.css';
import Header from './components/Header';
import PokemonPicture from './components/PokemonPicture';
import Keyboard from './components/Keyboard';
import Hangman from './components/Hangman';
import Letters from './components/Letters';
import Footer from './components/Footer';
import { createContext } from 'react';
import RandomPokemonGif from './components/Pokedex';
import React from 'react';

interface Pokemon {
  number: number
  name: string
  image: string
}

interface PokemonGuessingGame {
  pokemon: Pokemon
  lettersSelected: string[]
  setLettersSelected: React.Dispatch<React.SetStateAction<string[]>>
  guessedLetters: string[]
  wrongGuesses: number
}

const pokemonFetched = RandomPokemonGif()

export const PokemonContext = createContext<PokemonGuessingGame>({
  pokemon: { number: pokemonFetched.number, name: pokemonFetched.name, image: pokemonFetched.image },
  lettersSelected: [],
  setLettersSelected: () => { },
  guessedLetters: [],
  wrongGuesses: 0
});


function App() {

  const [pokemon] = React.useState<Pokemon>({ number: pokemonFetched.number, name: pokemonFetched.name, image: pokemonFetched.image })

  const [guessedLetters, setGuessedLetters] = React.useState<string[]>(Array(pokemon.name.length).fill("_"))
  const [wrongGuesses, setWrongGuesses] = React.useState<number>(0)
  const [correctGuesses, setCorrectGuesses] = React.useState<number>(0)
  const [lettersSelected, setLettersSelected] = React.useState<string[]>([])
  const [reasonGameEnded, setReasonGameEnded] = React.useState<'lost' | 'won' | 'in progress'>('in progress')

  const [gameOver, setGameOver] = React.useState<boolean>(false)

  /* replace guessedLetters that have _ with the guessed letter */
  const updateGuessedLetters = (letter: string) => {
    const newGuessedLetters = [...guessedLetters]
    for (let i = 0; i < pokemon.name.length; i++) {
      if (pokemon.name[i] === letter) {
        newGuessedLetters[i] = letter
      }
    }
    setGuessedLetters(newGuessedLetters)
  }

  React.useEffect(() => {
    if (lettersSelected.length > 0) {
      const lastLetter = lettersSelected[lettersSelected.length - 1]
      if (pokemon.name.includes(lastLetter)) {
        updateGuessedLetters(lastLetter)
        setCorrectGuesses(correctGuesses + 1)
      } else {
        setWrongGuesses(wrongGuesses + 1)
      }
    }
  }, [lettersSelected])

  React.useEffect(() => {
    if (wrongGuesses === 6) {
      setGameOver(true)
      setReasonGameEnded('lost')
    }
  }, [wrongGuesses])

  React.useEffect(() => {
    if (correctGuesses === pokemon.name.length) {
      setGameOver(true)
      setReasonGameEnded('won')
    }
  }, [correctGuesses])

  return (
    <div className="parent">
      <PokemonContext.Provider value={{
        pokemon: pokemon,
        lettersSelected: lettersSelected,
        setLettersSelected: setLettersSelected,
        guessedLetters: guessedLetters,
        wrongGuesses: wrongGuesses
      }}>
        {/* display modal when game over */}
        {gameOver ?
          <div className="modal">
            <div className="game-over-modal">
              <h1>You {reasonGameEnded}!</h1>
              <p>The correct pokemon was {pokemon.name}</p>
              <div onClick={() => window.location.reload()}>Play Again</div>
            </div>
          </div> :
          <>
            <Header />
            <PokemonPicture />
            <Keyboard />
            <Hangman />
            <Letters />
            <Footer />
          </>
        }
      </PokemonContext.Provider>
    </div>
  );
}

export default App;

