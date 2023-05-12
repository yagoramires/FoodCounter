import { useEffect, useState } from 'react';
import { foods } from '../database';
import FoodCard from './components/FoodCard';

function App() {
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    const quantityArray = [];

    foods.forEach((food) => quantityArray.push({ ...food, quantity: 0 }));

    setQuantity(quantityArray);
  }, []);

  console.log(quantity);

  return (
    <div className='App'>
      <h1 className='text-2xl font-bold w-full text-center bg-yellow-500 text-white py-5'>
        JapaCounter
      </h1>

      <ul className='flex flex-col gap-2 px-4 mt-8'>
        {foods?.map((food, i) => (
          <FoodCard key={i} food={food} quantity={0} />
        ))}
      </ul>
    </div>
  );
}

export default App;
