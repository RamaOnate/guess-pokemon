import './App.css';
import Header from './components/Header';
import PokemonPicture from './components/PokemonPicture';
import Keyboard from './components/Keyboard';
import Hangman from './components/Hangman';
import Letters from './components/Letters';
import Footer from './components/Footer';
import { createContext } from 'react';
import RandomPokemonGif from './components/Pokedex';

interface Pokemon {
  number: number
  name: string
  image: string
}

interface PokemonGuessingGame {
  pokemon: Pokemon
  lettersSelected: string[]
}

const pokemonFetched = RandomPokemonGif()
export const PokemonContext = createContext<PokemonGuessingGame>({
  pokemon: { number: pokemonFetched.number, name: pokemonFetched.name, image: pokemonFetched.image },
  lettersSelected: []
});

function App() {

  return (
    <div className="parent">
      <PokemonContext.Provider value={{ pokemon: { number: pokemonFetched.number, name: pokemonFetched.name, image: pokemonFetched.image }, lettersSelected: [] }}>
        <Header />
        <PokemonPicture />
        <Keyboard />
        <Hangman />
        <Letters />
        <Footer />
      </PokemonContext.Provider>
    </div>
  );
}

export default App;

