import { CATEGORY } from '@/constants/category';
import Image from 'next/image';

const Category = () => {
  return (
    <section className='bg-[#FFFFFF] py-[60px]'>
      <h3 className='mb-[10px] text-center text-[18px] font-semibold text-[#5E6282]'>
        CATEGORY
      </h3>
      <h2 className='mb-[70px] text-center text-[50px] font-bold text-[#14183E]'>
        We Offer Best Services
      </h2>

      <ul className='flex justify-center gap-[90px]'>
        {CATEGORY.map(({ image, title, description }, idx) => (
          <li
            key={idx}
            className="hover:after:bottom-30 relative w-[190px] cursor-pointer bg-[#FFFFFF] p-[20px]
              shadow-slate-300 duration-200 ease-in-out hover:z-10 hover:rounded-[20px]
              hover:shadow-xl hover:after:absolute hover:after:-left-5 hover:after:-z-10
              hover:after:block hover:after:h-[50px] hover:after:w-[50px]
              hover:after:rounded-br-[10px] hover:after:rounded-tl-[30px]
              hover:after:bg-[#DF6951] hover:after:content-[''] focus:rounded-[30px]"
          >
            <Image
              src={image?.src}
              width={100}
              height={100}
              alt='icon category'
              className='mx-auto mb-[30px] h-[100px] w-auto object-contain'
            />
            <h4 className='mb-[15px] text-center text-[20px] text-[#1E1D4C]'>
              {title}
            </h4>
            <p className='text-center text-[16px] text-[#5E6282]'>
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
