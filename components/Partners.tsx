import { PARTNERS } from '@/constants/partners';
import PartnersCarousel from './PartnersCarousel';

const Partners = () => {
  return (
    <section className='section flex justify-between bg-custom-bg-color-100'>
      <div className='container mx-auto'>
        <h2 className='hidden'>Our Partners</h2>

        <PartnersCarousel data={PARTNERS} />
      </div>
    </section>
  );
};

export default Partners;
