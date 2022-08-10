import './App.css';
import pokemon from './pokemon.png';
import pikachuHangman from './pikachu-hangman.png';

function App() {
  return (

    <div className="parent">
      <div className="header border">
        <img src={pokemon} className='header-left header-image' alt='Pokemon' />
        <img src={pikachuHangman} className='header-right header-image' alt='Pokemon' />
      </div>
      <div className="footer border">Footer</div>
      <div className="pokemon-picture border">Poke Picture</div>
      <div className="keyboard border">Keyboard</div>
      <div className="hangman border">Hangman</div>
      <div className="letter-lines border">Letter lines</div>
    </div>

  );
}

export default App;
