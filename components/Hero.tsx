import Image from 'next/image';
import {PlayButtonIcon} from '@/assets/icons';

export const Hero = ({}) => {
  return (
    <section>
      <h2 className='text-xl font-bold text-brand-red'>
        Best Destinations around the world
      </h2>
      <h1 className='text-[84px] font-bold text-dark-blue'>
        Travel, enjoy and live a new and full life
      </h1>
      <p className='text-base font-medium text-[#5E6282]'>
        Built Wicket longer admire do barton vanity itself do in it. Preferred
        to sportsmen it engrossed listening. Park gate sell they west hard for
        the.
      </p>

      <div className='flex gap-[44px]'>
        <button className='h-[60px] w-[170px] rounded-lg bg-[#F1A501] text-white font-medium text-lg hover:bg-[#fff0da] focus:bg-[#fff0da]  ease-in-out duration-200 hover:text-dark-blue'>
          Find out more
        </button>
        <div className='flex items-center'>
          <button className='flex items-center justify-center h-[52px] w-[52px] rounded-full bg-brand-red mr-5'>
            {/*<Image
              className='stroke-white'
              src={PlayButtonIcon}
              alt='play button'
            />*/}
          </button>
          <p className='text-base text-[#686D77] font-medium'>Play Demo</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
