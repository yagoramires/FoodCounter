/* eslint-disable react/prop-types */
import { MdAdd, MdRemove } from 'react-icons/md';

const FoodCard = ({ food }) => {
  const removePiece = () => {};
  const addPiece = () => {};

  return (
    <li className='w-full border-[1px] rounded-md border-zinc-100 h-20 shadow-sm flex items-center overflow-hidden justify-between px-4'>
      <div className=' flex items-center gap-4'>
        {/* <img src={food.image} alt='' className='w-20' /> */}
        <p className='font-bold'>{food}</p>
      </div>

      <div className=' flex items-center gap-4'>
        <MdRemove className='text-red-500' onClick={removePiece} />
        <p>{0}</p>
        <MdAdd className='text-green-500' onClick={addPiece} />
      </div>
    </li>
  );
};

export default FoodCard;
