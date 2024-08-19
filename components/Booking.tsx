import Image from 'next/image';

import SectionTitle from './SectionTitle';
import { BOOKING } from '@/constants/booking';
import whiteBuildings from '@/assets/booking/white-buildings.jpg';
import { SendIcon, MapIcon, BuildingIcon, LeafIcon } from '@/assets/icons';

const Booking = () => {
  return (
    <section className='container mx-auto section flex justify-between relative'>
      <div className='w-[450px]'>
        <SectionTitle
          title='Easy and Fast'
          subTitle='Book your next trip in 3 easy steps'
          align='right'
        />

        <ul className='flex flex-col gap-12'>
          {BOOKING.map(({ image, title, description }, idx) => (
            <li className='flex gap-5 items-center' key={idx}>
              <Image src={image} height={100} width={100} alt='icon' />
              <div>
                <h4 className='font-bold text-lg mb-2'>{title}</h4>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col items-center justify-center custom-bg-round-gradient'>
        <div
          className='bg-custom-bg-color-100 p-6 rounded-[20px] drop-shadow-lg
            shadow-custom-bg-color-300'
        >
          <Image
            src={whiteBuildings.src}
            height={300}
            width={400}
            alt='white buildings'
            className='rounded-[14px] mx-auto mb-4 max-w-full h-[300px]'
          />
          <h4 className='font-bold text-center text-lg mb-3'>Trip To Greece</h4>
          <p className='text-custom-text-color-400 text-sm text-center mb-4'>
            14-29 June | by Robbin joseph
          </p>

          <ul className='flex gap-4 mb-5'>
            <li>
              <button
                className='booking-card-button'
                type='button'
                aria-label='green energy'
              >
                <LeafIcon className='fill-custom-text-color-400 h-5 w-5' />
              </button>
            </li>
            <li>
              <button
                className='booking-card-button'
                type='button'
                aria-label='map'
              >
                <MapIcon className='fill-custom-text-color-400 h-5 w-5' />
              </button>
            </li>
            <li>
              <button
                className='booking-card-button'
                type='button'
                aria-label='send'
              >
                <SendIcon className='fill-custom-text-color-400 h-6 w-6' />
              </button>
            </li>
          </ul>
          <p className='flex gap-2 items-center'>
            <BuildingIcon className='fill-custom-text-color-400 h-5 w-5' />
            24 people going
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
