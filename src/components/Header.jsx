import { BiSushi } from 'react-icons/bi';
import { RiSwordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='w-full bg-zinc-900'>
      <Link
        to='/'
        className='text-2xl font-medium w-full text-center text-white py-5 flex justify-center items-center'
      >
        <BiSushi size={30} className='mr-[12px]' />
        Sushi
        <span className='text-orange-600 font-bold'>Battle</span>
        <RiSwordFill size={30} className='ml-[12px]' />
      </Link>
    </header>
  );
};

export default Header;
