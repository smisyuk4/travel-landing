'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//interface ArrayItem {
//  image: string;
//  review: string;
//  name: string;
//  location: string;
//}

//interface Props extends Array<ArrayItem> {}
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  slide: 'li',
  className: 'w-[700px]',
};

const Carousel = ({ data }) => {
  return (
    <ul className='sliderWrapper'>
      <Slider {...settings}>
        {data.map(({ image, review, name, location }, idx) => (
          <li className='slide relative' key={idx}>
            <Image
              className='image-bg h-20 w-20 rounded-full'
              src={image}
              height={100}
              width={100}
              alt='avatar'
            />
            <div className='overflow-scroll'>
              <p className='mb-3'>{review}</p>
              <p className='font-bold text-lg mb-1'>{name}</p>
              <p className='text-custom-text-color-400 text-sm'>{location}</p>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
};

export default Carousel;
