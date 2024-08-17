import { PlayButtonIcon } from '@/assets/icons';

export const Hero = () => {
  return (
    <section className='container mx-auto custom-lg-height flex w-full items-center justify-between'>
      <div className='lg:w-[650px]'>
        <h2 className='font-bold text-accent-800 lg:mb-[24px] lg:text-xl'>
          Best Destinations around the world
        </h2>
        <h1 className='relative font-bold leading-none lg:mb-[30px] lg:text-[84px]'>
          Travel, enjoy and live a new and full life
        </h1>
        <p className='text-base font-medium text-custom-text-color-400 lg:mb-[34px] lg:w-[477px]'>
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
          <div className='flex items-center relative'>
            <button className='play-demo-button' type='button'>
              <PlayButtonIcon className={'h-5 w-5'} />
            </button>
            <p className='image-bg text-base font-medium text-custom-text-color-400'>
              Play Demo
            </p>
          </div>
        </div>
      </div>

      <div className="h-[80%] w-[40%] bg-[url('../assets/girl.png')] bg-contain bg-no-repeat"></div>
    </section>
  );
};

export default Hero;
