import { NavigationIcon } from '@/assets/icons';
import { DESTINATIONS } from '@/constants/destinations';
import Image from 'next/image';

const Destinations = () => {
  return (
    <section className='bg-[#FFFFFF] py-[60px]'>
      <h3 className='mb-[10px] text-center text-[18px] font-semibold text-[#5E6282]'>
        Top Selling
      </h3>
      <h2 className='mb-[70px] text-center text-[50px] font-bold text-[#14183E]'>
        Top Destinations
      </h2>
      <ul className='flex justify-center gap-[90px]'>
        {DESTINATIONS.map(({ image, destination, cost, duration }, idx) => (
          <li
            key={idx}
            className='relative w-[314px] cursor-pointer bg-[#FFFFFF] pb-[20px] shadow-slate-300
              duration-200 ease-in-out rounded-[20px] shadow-lg'
          >
            <Image
              className='object-cover w-full rounded-[20px]'
              src={image.src}
              alt={destination}
              height={400}
              width={350}
            />
            <div
              className='flex-col py-[17px] px-[20px] h-[100px] absolute bottom-[-15px] bg-[#FFFFFF]
                w-full rounded-b-[20px]'
            >
              <div className='flex justify-between'>
                <h4 className='text-[#5E6282] text-[18px] mb-[15px] font-bold'>
                  {destination}
                </h4>
                <p className='text-[#5E6282] text-[18px]'>{`$ ${cost}`}</p>
              </div>
              <p className='flex gap-[8px] items-center'>
                <NavigationIcon className={'h-4 w-4 stroke-black'} />
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
