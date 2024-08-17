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
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  slide: 'li',
  className: 'w-full mx-auto',
};

const PartnersCarousel = ({ data }) => {
  return (
    <ul className='partners-slider'>
      <Slider {...settings}>
        {data.map(({ image, label }, idx) => (
          <li className='slide' key={idx}>
            <Image
              className=''
              src={image}
              height={150}
              width={150}
              alt={label}
            />
          </li>
        ))}
      </Slider>
    </ul>
  );
};

export default PartnersCarousel;
