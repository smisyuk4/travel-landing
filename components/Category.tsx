import Image from 'next/image';

import { CATEGORY } from '@/constants/category';
import SectionTitle from './SectionTitle';

const Category = () => {
  return (
    <section className='bg-custom-bg-color-100 section'>
      <SectionTitle title='Category' subTitle='We Offer Best Services' />

      <ul className='flex justify-center gap-[90px]'>
        {CATEGORY.map(({ image, title, description }, idx) => (
          <li
            key={idx}
            className='relative w-[190px] cursor-pointer bg-[#FFFFFF] p-[20px] shadow-slate-300
              duration-200 ease-in-out hover:z-10 hover:rounded-[20px] hover:shadow-xl
              focus:rounded-[30px]'
          >
            <Image
              src={image?.src}
              width={100}
              height={100}
              alt='icon category'
              className='mx-auto mb-[30px] h-[100px] w-auto object-contain'
            />
            <h4 className='mb-[15px] font-bold text-center text-xl text-custom-text-color-800'>
              {title}
            </h4>
            <p className='text-center text-lg text-custom-text-color-400'>
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
