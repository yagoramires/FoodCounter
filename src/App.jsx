import { useContext } from 'react';
import FoodList from './components/FoodList';
import Header from './components/Header';
import { QuantityContext } from './context/QuantityContext';

function App() {
  const { clearCounter } = useContext(QuantityContext);

  return (
    <div className='App bg-zinc-800 min-h-screen text-white'>
      <Header />
      <FoodList />
      <button
        onClick={clearCounter}
        className='text-sm w-full text-center text-red-500'
      >
        Limpar
      </button>
    </div>
  );
}

export default App;
