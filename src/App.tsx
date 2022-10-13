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

  React.useEffect(() => {
    if (wrongGuesses === 7) {
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

  React.useEffect(() => {
    if (lettersSelected.length > 0) {
      const letter = lettersSelected[lettersSelected.length - 1]
      if (pokemon.name.includes(letter)) {
        const newGuessedLetters = [...guessedLetters]
        for (let i = 0; i < pokemon.name.length; i++) {
          if (pokemon.name[i] === letter) {
            newGuessedLetters[i] = letter
          }
        }
        setGuessedLetters(newGuessedLetters)
        /* set correct guesses to amount of letters word has */
        setCorrectGuesses(correctGuesses + pokemon.name.split(letter).length - 1)
      } else {
        setWrongGuesses(wrongGuesses + 1)
      }
    }
  }, [lettersSelected])

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

