import FoodCard from './FoodCard';
import { useContext } from 'react';
import { QuantityContext } from '../context/QuantityContext';

const FoodList = () => {
  const { foodList } = useContext(QuantityContext);
  const categories = new Set(foodList.map((food) => food.category));
  const categoryList = [...categories];

  const categoryCheck = (category) => {
    const filteredList = foodList.filter((food) => food.category === category);

    return filteredList.map((food) => <FoodCard key={food.id} food={food} />);
  };

  return (
    <ul className='flex flex-col gap-2 px-4 mt-8'>
      {categoryList?.map((category, index) => (
        <div key={index} className='flex flex-col mt-2 gap-[4px]'>
          <h2 className='font-bold text-xl'>{category}</h2>
          <ul className='flex flex-col gap-2'>{categoryCheck(category)}</ul>
        </div>
      ))}
    </ul>
  );
};

export default FoodList;
