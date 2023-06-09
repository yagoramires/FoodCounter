import { useEffect, useState } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const ResultDetails = () => {
  const [itemsList, setItemsList] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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

    setItemsList(selectedItemsFilter);

    const getItemsPriceSum = selectedItemsFilter.reduce(
      (acc, cur) => acc + cur.unityPrice * cur.quantity,
      0,
    );

    setTotal(getItemsPriceSum);

    setLoading(false);
  }, []);

  return (
    <div className='p-4'>
      <button
        onClick={() => navigate(-1)}
        className='w-full flex items-center text-sm font-bold gap-2'
      >
        <RiArrowLeftSLine />
        voltar
      </button>

      {loading && <p>Carregando ...</p>}

      {!loading && (
        <ul className='mt-10 flex flex-col justify-center items-start gap-2'>
          {itemsList.map((item) => (
            <li
              key={item.id}
              className='flex justify-between items-center w-full'
            >
              <p>
                <span className='font-bold'>{`[${item.category}]`}</span>
                {` ${item.name} (${item.quantity})`}
              </p>
              <p className='font-bold'>{`${(
                item.unityPrice * item.quantity
              ).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}`}</p>
            </li>
          ))}

          <li className='flex justify-between items-center w-full mt-4 border-t-2 border-zinc-200 py-4 font-bold'>
            <p>Total:</p>
            <p>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ResultDetails;
