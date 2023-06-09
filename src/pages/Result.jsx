import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuantityContext } from '../context/QuantityContext';

const Result = () => {
  const [result, setResult] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useNavigate();

  const { clearCounter } = useContext(QuantityContext);

  const navigate = useNavigate();

  const userPrice = Number(localStorage.getItem('userPrice')) * 1.1;

  useEffect(() => {
    setLoading(true);

    const userResult = JSON.parse(localStorage.getItem('currentList'));

    if (!userResult) {
      navigate('/');
      return;
    }

    const selectedItemsFilter = userResult.filter(
      (item) => item.quantity && item.quantity > 0,
    );

    const getTotalItensQuantity = selectedItemsFilter.reduce(
      (acc, cur) => acc + cur.quantity,
      0,
    );
    setQuantity(getTotalItensQuantity);

    const getItemsPriceSum = selectedItemsFilter.reduce(
      (acc, cur) => acc + cur.unityPrice * cur.quantity,
      0,
    );

    setResult(getItemsPriceSum);
    setLoading(false);
  }, []);

  return (
    <div className='p-4 flex flex-col justify-center items-center min-h-[calc(100vh-72px)] w-full max-w-[896px] mx-auto'>
      <button onClick={() => router(-1)} className='w-full text-start'>
        voltar
      </button>

      {loading && <p>Carregando ...</p>}
      {!loading && (
        <div className='flex-1 flex flex-col justify-center items-center w-full gap-4'>
          <div className='w-full flex justify-between items-center'>
            <p className='text-xl'>Valor pago:</p>
            <p className='font-bold text-xl'>
              {userPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className='w-full flex justify-between items-center'>
            <p className='text-xl'>Total de peças consumidas:</p>
            <p className='font-bold text-xl'>{quantity}</p>
          </div>
          <div className='w-full flex justify-between items-center'>
            <p className='text-xl'>Valor das peças consumidas:</p>
            <p className='font-bold text-xl'>
              {result.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className='w-full flex justify-between items-center mt-10'>
            <p className='text-xl'>Resultado:</p>
            <p className='font-bold text-xl'>
              {(result - userPrice).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className='w-full flex justify-between items-center mt-10'>
            {userPrice - result > 0 ? (
              <p className='text-2xl text-center w-full'>
                Poxa, você infelizmente perdeu a batalha contra o restaurante =(
              </p>
            ) : (
              <p className='text-2xl text-center w-full'>
                Parabéns!, você venceu a batalha contra o restaurante!!
              </p>
            )}
          </div>
        </div>
      )}
      <button
        onClick={clearCounter}
        className='p-4 bg-zinc-900 text-center rounded-md hover:bg-zinc-950 transition-all duration-150 w-[calc(100%-32px)]'
      >
        Reiniciar
      </button>
    </div>
  );
};

export default Result;
