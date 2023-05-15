import { useDispatch, useSelector } from 'react-redux';
import { addCounter, subCounter } from './store/modules/counter/actions';
import { addCommentThunk } from './store/modules/user/thunks';
import { useState } from 'react';

function App() {
  const counter = useSelector((state) => state.counter);
  const { comments } = useSelector((state) => state.user);
  const [newComment, setNewComment] = useState('');

  const dispatch = useDispatch();

  const sum = () => {
    dispatch(addCounter());
  };

  const sub = () => {
    dispatch(subCounter());
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(addCommentThunk(newComment));

    setNewComment('');
  };

  return (
    <div className='App'>
      {/* <h1 className='text-2xl font-bold w-full text-center bg-yellow-500 text-white py-5'>
        JapaCounter
      </h1> */}

      <h1 className='text-2xl font-bold w-full text-center px-4 pt-10'>
        {counter}
      </h1>

      <div className='flex  justify-center items-center p-4 gap-2'>
        <button
          className='font-bold rounded-md w-16 text-white p-2 bg-yellow-500'
          onClick={sum}
        >
          +
        </button>
        <button
          className='font-bold rounded-md w-16 text-white p-2 bg-yellow-500'
          onClick={sub}
        >
          -
        </button>
      </div>

      <form className='flex  justify-center items-center p-4 gap-2'>
        <input
          className='font-bold rounded-md  p-2 border-yellow-500 border-2'
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type='submit'
          className='font-bold rounded-md  text-white p-2 bg-yellow-500'
          onClick={handleAddComment}
        >
          Comment
        </button>
      </form>

      <ul className='flex flex-col gap-2 px-4 mt-8'>
        {comments?.map((comment, i) => (
          // <FoodCard key={i} food={food} quantity={0} />
          <p key={i}>{comment}</p>
        ))}
      </ul>
    </div>
  );
}

export default App;
