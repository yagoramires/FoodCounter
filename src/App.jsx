import { useContext } from 'react';
import FoodList from './components/FoodList';
import Header from './components/Header';
import { QuantityContext } from './context/QuantityContext';

function App() {
  const { clearCounter } = useContext(QuantityContext);

  return (
    <div className='App bg-zinc-800 min-h-screen text-white'>
      <Header />
      <div className='flex flex-col justify-between items-center min-h-[calc(100vh-100px)]'>
        <FoodList />
        <button
          onClick={clearCounter}
          className='text-sm w-full text-center text-red-500'
        >
          Limpar
        </button>
      </div>
    </div>
  );
}

export default App;
