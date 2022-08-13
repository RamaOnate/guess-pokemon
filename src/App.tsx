import './App.css';

function App() {
  return (

    <div className="parent">
      <div className="header border">
        <div className="pokemon-logo header-image border" />
        <div className="hanging-pikachu header-image border" />
      </div>
      <div className="footer border">Footer</div>
      <div className="pokemon-picture-container border">
        <div className="black pokemon-picture" />
      </div>
      <div className="keyboard border">Keyboard</div>
      <div className="hangman border">Hangman</div>
      <div className="letter-lines border">Letter lines</div>
    </div>

  );
}

export default App;
