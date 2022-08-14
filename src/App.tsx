import './App.css';
import Header from './components/Header';
import PokemonPicture from './components/PokemonPicture';

function App() {
  return (

    <div className="parent">
      <Header />
      <PokemonPicture />
      <div className="keyboard border">Keyboard</div>
      <div className="hangman border">Hangman</div>
      <div className="letter-lines border">Letter lines</div>
      <div className="footer border">Footer</div>
    </div>

  );
}

export default App;
