import SectionTitle from './SectionTitle';
import { REVIEWS } from '@/constants/reviews';
import Carousel from './Carousel';

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

          <Carousel data={REVIEWS} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
