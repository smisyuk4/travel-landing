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
            className='relative w-[190px] cursor-pointer bg-[#FFFFFF] p-[20px] shadow-slate-300
              duration-200 ease-in-out hover:z-10 hover:rounded-[20px] hover:shadow-xl
              focus:rounded-[30px]'
          >
            <Image
              className='object-cover'
              src={image.src}
              alt={destination}
              height={200}
              width={200}
            />
            <h4>{destination}</h4>
            <p>{`$${cost}`}</p>
            <p>
              <NavigationIcon className={'h-4 w-4 stroke-black'} />
              {`${duration} Days Trip`}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Destinations;
