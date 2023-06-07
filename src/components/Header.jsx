import { BiSushi } from 'react-icons/bi';

const Header = () => {
  return (
    <header className='w-full bg-zinc-900'>
      <h1 className='text-2xl font-medium w-full text-center text-white py-5 flex justify-center items-center'>
        <BiSushi size={30} className='mr-[2px]' />
        <span className='text-orange-600 font-bold'>Japa</span>Counter
        <BiSushi size={30} className='ml-[2px]' />
      </h1>
    </header>
  );
};

export default Header;
