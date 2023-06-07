/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';
import { QuantityContext } from '../context/QuantityContext';

const FoodCard = ({ food }) => {
  const { addPiece, removePiece } = useContext(QuantityContext);

  return (
    <li className='w-full bg-zinc-900 shadow-md rounded-md border-zinc-100 p-2  flex items-center overflow-hidden justify-between px-4'>
      <div className=' flex items-center gap-4'>
        {/* <img src={food.image} alt='' className='w-20' /> */}
        <p className='font-medium text-sm'>{food.name}</p>
      </div>

      <div className=' flex items-center gap-4'>
        <MdRemove
          className='bg-zinc-600 rounded-full'
          onClick={() => removePiece(food.id)}
        />
        <p>{food.quantity ? food.quantity : 0}</p>
        <MdAdd
          className='bg-zinc-600 rounded-full'
          onClick={() => addPiece(food.id)}
        />
      </div>
    </li>
  );
};

export default FoodCard;
