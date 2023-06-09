import { useContext } from 'react';
import { QuantityContext } from '../context/QuantityContext';

import FoodList from '../components/FoodList';
import Price from '../components/Price';

const Home = () => {
  const { clearCounter } = useContext(QuantityContext);
  return (
    <div className='flex flex-col justify-center items-center min-h-[calc(100vh-100px)]'>
      <Price />
      <FoodList />
      <button
        onClick={clearCounter}
        className='text-sm w-full text-center text-red-500'
      >
        Limpar
      </button>
    </div>
  );
};

export default Home;
