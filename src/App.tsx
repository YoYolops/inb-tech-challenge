import {PokemonDataContextProvider} from './core/contexts/PokemonDataContext';
import PokemonsPage from './pages/PokemonsPage/PokemonsPage';

function App() {
  return (
    <div className="App">
        <PokemonDataContextProvider>
            <PokemonsPage />
        </PokemonDataContextProvider>
    </div>
  );
}

export default App;
