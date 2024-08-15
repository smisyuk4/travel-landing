import Image from 'next/image';

import SectionTitle from './SectionTitle';
import { BOOKING } from '@/constants/booking';
import whiteBuildings from '@/assets/booking/white-buildings.jpg';
import { SendIcon, MapIcon, BuildingIcon, LeafIcon } from '@/assets/icons';

const Booking = () => {
  return (
    <section className='container mx-auto section flex justify-between'>
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

      <div className='flex flex-col items-center'>
        <div className='border-2 border-custom-bg-color-300 p-6 rounded-[20px] shadow-slate-300'>
          <Image
            src={whiteBuildings.src}
            height={200}
            width={200}
            alt='white buildings'
            className='rounded-[14px] mx-auto mb-4'
          />
          <h4 className='font-bold text-center text-lg mb-3'>Trip To Greece</h4>
          <p className='text-custom-text-color-400 text-sm text-center mb-3'>
            14-29 June | by Robbin joseph
          </p>
          <ul className='flex gap-4'>
            <li>
              <button type='button' aria-label='green energy'>
                <LeafIcon />
              </button>
            </li>
            <li>
              <button type='button' aria-label='map'>
                <MapIcon />
              </button>
            </li>
            <li>
              <button type='button' aria-label='send'>
                <SendIcon />
              </button>
            </li>
          </ul>
          <p>
            <BuildingIcon />
            24 people going
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
