import Image from 'next/image';
import { PlayButtonIcon } from '@/assets/icons';

export const Hero = ({}) => {
  return (
    <section className='flex items-center custom-lg-height'>
      <div className='lg:w-[630px]'>
        <h2 className='lg:mb-[24px] lg:text-xl font-bold text-brand-red'>
          Best Destinations around the world
        </h2>
        <h1 className='relative lg:mb-[30px] lg:text-[84px] font-bold leading-none text-dark-blue'>
          Travel,
          <span className="z-10 after:-z-10 after:content-[''] after:bg-[url('../assets/hero-title-decore.svg')] after:block after:w-[390px] after:h-[10px] after:absolute after:top-[75px] after:right-0">
            enjoy
          </span>
          and live a new and full life
        </h1>
        <p className='lg:w-[477px] lg:mb-[34px] text-base font-medium text-[#5E6282]'>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className='flex gap-[44px]'>
          <button
            className='h-[60px] w-[170px] rounded-lg bg-[#F1A501] text-white font-medium text-lg hover:bg-[#b78210] focus:bg-[#b78210]  ease-in-out duration-200 hover:text-dark-blue  focus:text-dark-blue'
            type='button'
          >
            Find out more
          </button>
          <div className='flex items-center'>
            <button
              className='flex items-center justify-center h-[52px] w-[52px] rounded-full bg-brand-red mr-5 hover:bg-[#672c20] focus:bg-[#672c20] ease-in-out duration-200'
              type='button'
            >
              <PlayButtonIcon className={'h-5 w-5'} />
            </button>
            <p className='text-base text-[#686D77] font-medium'>Play Demo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
