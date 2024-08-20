import { PlayButtonIcon } from '@/assets/icons';

export const Hero = () => {
  return (
    <section className='container mx-auto custom-lg-height flex w-full items-center justify-between'>
      <div className='small-mobile:w-[380px] md:w-[620px] lg:w-[650px]'>
        <h2 className='font-bold text-accent-800 text-sm md:text-lg lg:mb-7 md:mb-5 mb-3 lg:text-xl'>
          Best Destinations around the world
        </h2>
        <h1
          className='relative font-bold leading-none md:mb-6 md:text-[60px] text-[36px] mb-4 lg:mb-8
            lg:text-[84px]'
        >
          Travel, enjoy and live a new and full life
        </h1>
        <p
          className='font-medium text-custom-text-color-400 text-sm md:text-lg mb-6 lg:mb-8
            lg:w-[477px]'
        >
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className='flex gap-[44px]'>
          {/*<button
            className='h-[60px] w-[170px] rounded-lg bg-[#F1A501] text-lg font-medium text-white
              duration-200 ease-in-out hover:bg-[#b78210] hover:text-dark-blue
              focus:bg-[#b78210] focus:text-dark-blue'
            type='button'
          >
            Find out more
          </button>*/}
          <div className='flex items-center'>
            <button className='play-demo-button' type='button'>
              <PlayButtonIcon className={'h-5 w-5'} />
            </button>
            <p className='font-medium text-custom-text-color-400 text-sm md:text-lg'>
              Play Demo
            </p>
          </div>
        </div>
      </div>

      {/*<div className="h-[80%] w-[40%] bg-[url('../assets/girl.png')] bg-contain bg-no-repeat"></div>*/}
    </section>
  );
};

export default Hero;
