import Image from 'next/image';

import { NavigationIcon } from '@/assets/icons';
import { DESTINATIONS } from '@/constants/destinations';
import SectionTitle from './SectionTitle';

const Destinations = () => {
  return (
    <section className='bg-custom-bg-color-100 section' id='destinations'>
      <SectionTitle title='Top Selling' subTitle='Top Destinations' />

      <ul className='flex justify-center gap-[90px]'>
        {DESTINATIONS.map(({ image, destination, cost, duration }, idx) => (
          <li
            key={idx}
            className='relative w-[300px] cursor-pointer bg-custom-bg-color-100 shadow-slate-300
              duration-200 ease-in-out rounded-[20px] drop-shadow-lg'
          >
            <Image
              className='object-cover w-full rounded-[20px]'
              src={image.src}
              alt={destination}
              height={400}
              width={350}
            />
            <div
              className='flex-col py-[17px] px-[20px] h-[100px] absolute bg-custom-bg-color-100 w-full
                bottom-0 rounded-b-[20px]'
            >
              <div className='flex justify-between'>
                <h4 className='text-custom-text-color-400 text-lg mb-[15px] font-bold'>
                  {destination}
                </h4>
                <p className='text-custom-text-color-400 text-lg'>{`$ ${cost}`}</p>
              </div>
              <p className='flex gap-3 items-center text-custom-text-color-800'>
                <NavigationIcon
                  className={'h-4 w-4 stroke-custom-text-color-800'}
                />
                {`${duration} Days Trip`}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Destinations;
