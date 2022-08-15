import './App.css';
import Header from './components/Header';
import PokemonPicture from './components/PokemonPicture';
import Keyboard from './components/Keyboard';
import Hangman from './components/Hangman';
import Letters from './components/Letters';
import Footer from './components/Footer';

function App() {
  return (

    <div className="parent">
      <Header />
      <PokemonPicture />
      <Keyboard />
      <Hangman />
      <Letters />
      <Footer />
    </div>

  );
}

export default App;
