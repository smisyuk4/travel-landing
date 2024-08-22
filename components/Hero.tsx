import { PlayButtonIcon } from '@/assets/icons';

export const Hero = () => {
  return (
    <section
      className='container mx-auto custom-lg-height flex w-full items-center justify-between
        small-mobile:items-start small-mobile:pt-20 relative'
    >
      <div className='small-mobile:w-[380px] md:w-[620px] lg:w-[650px] z-20'>
        <h2 className='font-bold text-accent-800 text-sm md:text-lg lg:mb-7 md:mb-5 mb-3 lg:text-xl'>
          Best Destinations around the world
        </h2>
        <h1
          className='relative font-bold leading-none md:mb-10 md:text-[60px] text-[36px] mb-7
            lg:text-[84px]'
        >
          Travel, enjoy and live a new and full life
        </h1>
        <p
          className='font-medium text-custom-text-color-400 text-sm md:text-lg mb-6 lg:mb-8
            md:w-[500px] lg:w-auto'
        >
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className='flex gap-[44px]'>
          <div className='flex items-center'>
            <button
              className='play-demo-button'
              type='button'
              aria-label='play demo'
            >
              <PlayButtonIcon className={'h-5 w-5'} />
            </button>
            <p className='font-medium text-custom-text-color-400 text-sm md:text-lg'>
              Play Demo
            </p>
          </div>

          <button
            className='secondary-button h-[40px] w-[120px] lg:h-[52px] md:w-[170px]'
            type='button'
            aria-label='find out more'
          >
            Find out more
          </button>
        </div>
      </div>

      <div
        className="hidden small-mobile:block small-mobile:h-[400px] small-mobile:w-[350px]
          small-mobile:absolute small-mobile:bottom-0 small-mobile:right-0 lg:h-[80%]
          lg:w-[40%] bg-[url('../assets/girl.png')] bg-contain bg-no-repeat z-10"
      ></div>
    </section>
  );
};

export default Hero;
