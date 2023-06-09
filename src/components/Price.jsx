import { useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';

const Price = () => {
  const [newPrice, setNewPrice] = useState(0);
  const [userPrice, setUserPrice] = useState(null);

  const savePrice = (e) => {
    e.preventDefault();

    if (newPrice === 0) {
      return;
    }

    setUserPrice(Number(newPrice));
    localStorage.setItem('userPrice', newPrice);
  };

  const removeUserPrice = () => {
    setUserPrice(null);
    localStorage.removeItem('userPrice');
  };

  useEffect(() => {
    const storagePrice = localStorage.getItem('userPrice');

    if (storagePrice && storagePrice > 0) {
      setUserPrice(Number(storagePrice));
    }

    localStorage.removeItem('currentList');
    localStorage.removeItem('userPrice');
  }, []);

  return (
    <div className='w-full mt-4'>
      {userPrice && (
        <div className='w-full flex justify-between items-center text-zinc-400 '>
          <p>
            Valor do rodízio:{' '}
            {userPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <button onClick={removeUserPrice}>
            <RiCloseFill />
          </button>
        </div>
      )}
      {!userPrice && (
        <form
          onSubmit={savePrice}
          className='flex justify-center items-center overflow-hidden rounded-md w-full'
        >
          <input
            type='number'
            min='0'
            step='any'
            className='w-full p-2 px-4 bg-zinc-900 outline-none text-left'
            placeholder='Digite o valor do rodízio'
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <input
            type='submit'
            className='p-2 px-8 bg-orange-600 cursor-pointer text-center'
          />
        </form>
      )}
    </div>
  );
};

export default Price;
