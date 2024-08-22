import Image from 'next/image';

import { CATEGORY } from '@/constants/category';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const Category = () => {
  return (
    <section className='bg-custom-bg-color-100 section' id='category'>
      <div className='container mx-auto'>
        <SectionTitle title='Category' subTitle='We Offer Best Services' />

        <ul className='grid grid-cols-2 gap-4 justify-items-center md:grid-cols-4'>
          {CATEGORY.map(({ image, title, description }, idx) => (
            <li key={idx} className='category-card'>
              <Link href={`/category/${title}`} aria-label={title}>
                <Image
                  src={image?.src}
                  width={100}
                  height={100}
                  alt='icon category'
                  className='mx-auto mb-[30px] h-[70px] w-auto md:h-[100px] md:w-[100px] object-contain'
                />
                <h4 className='mb-4 font-bold text-center text-lg md:text-xl text-custom-text-color-800'>
                  {title}
                </h4>
                <p className='text-center text-sm md:text-lg text-custom-text-color-400'>
                  {description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
