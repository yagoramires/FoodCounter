import { useContext } from 'react';
import { QuantityContext } from '../context/QuantityContext';

import FoodList from '../components/FoodList';
import Price from '../components/Price';
import { Link } from 'react-router-dom';

const Home = () => {
  const { clearCounter } = useContext(QuantityContext);

  const verifyIfHasItems = localStorage.getItem('currentList');

  return (
    <div className='flex flex-col justify-center items-center min-h-[calc(100vh-100px)]  w-full max-w-[896px] mx-auto'>
      <Price />
      <FoodList />

      {verifyIfHasItems && (
        <>
          <Link
            to='/result'
            className='p-4 bg-zinc-900 text-center rounded-md hover:bg-zinc-950 transition-all duration-150 w-[calc(100%-32px)]'
          >
            Concluir
          </Link>
          <button
            onClick={clearCounter}
            className='text-sm w-full text-center text-red-500 mt-4'
          >
            Limpar
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
