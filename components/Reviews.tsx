import Image from 'next/image';

import SectionTitle from './SectionTitle';
import { REVIEWS } from '@/constants/reviews';

const Reviews = () => {
  return (
    <section className='section flex justify-between bg-custom-bg-color-100'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <div className='w-[450px]'>
            <SectionTitle
              title='Reviews'
              subTitle='What people say about Us.'
              align='right'
            />
          </div>

          <ul className='flex flex-col gap-12'>
            {REVIEWS.map(({ image, review, name, location }, idx) => (
              <li className='flex gap-5 w-[500px] h-[200px]' key={idx}>
                <Image
                  className='h-20 w-20 rounded-full'
                  src={image}
                  height={100}
                  width={100}
                  alt='avatar'
                />
                <div className='overflow-scroll'>
                  <p className='mb-3'>{review}</p>
                  <p className='font-bold text-lg mb-1'>{name}</p>
                  <p className='text-custom-text-color-400 text-sm'>
                    {location}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
