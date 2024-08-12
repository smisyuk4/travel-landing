import Image from 'next/image';
import { PlayButtonIcon } from '@/assets/icons';

export const Hero = ({}) => {
  return (
    <section className='custom-lg-height flex items-center'>
      <div className='lg:w-[630px]'>
        <h2 className='font-bold text-brand-red lg:mb-[24px] lg:text-xl'>
          Best Destinations around the world
        </h2>
        <h1 className='relative font-bold leading-none text-dark-blue lg:mb-[30px] lg:text-[84px]'>
          Travel,
          <span className="z-10 after:absolute after:right-0 after:top-[75px] after:-z-10 after:block after:h-[10px] after:w-[390px] after:bg-[url('../assets/hero-title-decore.svg')] after:content-['']">
            enjoy
          </span>
          and live a new and full life
        </h1>
        <p className='text-base font-medium text-[#5E6282] lg:mb-[34px] lg:w-[477px]'>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className='flex gap-[44px]'>
          <button
            className='h-[60px] w-[170px] rounded-lg bg-[#F1A501] text-lg font-medium text-white duration-200 ease-in-out hover:bg-[#b78210] hover:text-dark-blue focus:bg-[#b78210] focus:text-dark-blue'
            type='button'
          >
            Find out more
          </button>
          <div className='flex items-center'>
            <button
              className='mr-5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-red duration-200 ease-in-out hover:bg-[#672c20] focus:bg-[#672c20]'
              type='button'
            >
              <PlayButtonIcon className={'h-5 w-5'} />
            </button>
            <p className='text-base font-medium text-[#686D77]'>Play Demo</p>
          </div>
        </div>
      </div>

      <div className='bg-girl'>asd</div>
    </section>
  );
};

export default Hero;
