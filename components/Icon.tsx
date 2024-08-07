import Image from 'next/image';
import BurgerIcon from '@/assets/icons/burger-menu.svg';

const Icon = ({ id, ...prop }) => {
  return (
    <BurgerIcon className='h-10 w-10' />
    //<Image
    //  src={burgerIcon.src}
    //  height={25}
    //  width={25}
    //  className='stroke-black'
    ///>
  );
};

export default Icon;
