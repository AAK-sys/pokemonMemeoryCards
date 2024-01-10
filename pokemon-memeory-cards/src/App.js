import './App.css';
import PokemonCards from './components/pokemonCards';
import pikachu from "./images/pikachu.png"
import diglett from "./images/diglett.png"

function App() {
  //maybe a better way to select backgrounds make the code less verbose
  const [pikachuBG, diglettBG] = [
    'linear-gradient(to bottom, yellow, red)',
    'linear-gradient(to bottom, rgb(225,166,107), gray)'
  ];
  //const pikachuImgPath = "./images/pikachu.png"; need to make dynamic path work
  return (
    <div className="App">
      <PokemonCards image={pikachu} background = {pikachuBG} />
      <PokemonCards image={diglett} background = {diglettBG}/>
    </div>
  );
}

export default App;
