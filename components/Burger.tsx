import { BurgerIcon } from '@/assets/icons';

const Burger = () => {
  return (
    <div className='z-40'>
      <button>
        <BurgerIcon className={'h-10 w-10 stroke-black'} />
      </button>
    </div>
  );
};

export default Burger;
