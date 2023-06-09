import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuantityContext } from '../context/QuantityContext';
import { RiArrowLeftSLine, RiSwordFill } from 'react-icons/ri';
import { FaSadCry } from 'react-icons/fa';

const Result = () => {
  const [result, setResult] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { clearCounter } = useContext(QuantityContext);

  const userPrice = Number(localStorage.getItem('userPrice')) * 1.1;

  useEffect(() => {
    setLoading(true);

    const userResult = JSON.parse(localStorage.getItem('currentList'));
    if (userResult) {
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
    <div className='p-4 flex flex-col justify-between items-center min-h-[calc(100vh-72px)] w-full max-w-[896px] mx-auto'>
      <button
        onClick={() => navigate(-1)}
        className='w-full flex items-center text-lg gap-2'
      >
        <RiArrowLeftSLine />
        voltar
      </button>

      {loading && <p>Carregando ...</p>}
      {!loading && (
        <div className='flex flex-col justify-center items-center w-full gap-2'>
          <div className='w-full flex justify-between items-center'>
            <p className='text-lg'>Valor pago:</p>
            <p className='font-bold text-lg'>
              {userPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className='w-full flex justify-between items-center'>
            <p className='text-lg'>Total de peças consumidas:</p>
            <p className='font-bold text-lg'>{quantity}</p>
          </div>
          <div className='w-full flex justify-between items-center'>
            <p className='text-lg'>Valor das peças consumidas:</p>
            <p className='font-bold text-lg'>
              {result.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className='w-full flex justify-between items-center mt-8'>
            <p className='text-xl'>Resultado:</p>
            <p className='font-bold text-lg'>
              {(result - userPrice).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className='w-full flex justify-between items-center mt-10'>
            {userPrice - result > 0 ? (
              <p className='text-xl text-center w-full flex flex-col items-center'>
                Poxa, você infelizmente perdeu a batalha contra o restaurante..
                <FaSadCry size={60} className='mt-2' />
              </p>
            ) : (
              <p className='text-xl text-center w-full flex flex-col items-center'>
                Parabéns! você venceu a batalha contra o restaurante!!
                <RiSwordFill size={60} className='mt-2' />
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
