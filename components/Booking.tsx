import Image from 'next/image';

import SectionTitle from './SectionTitle';

const Booking = () => {
  return (
    <section className='container mx-auto section'>
      <SectionTitle
        title='Easy and Fast'
        subTitle='Book your next trip in 3 easy steps'
        align='right'
      />

      <ul>
        <li>
          <Image src={''} height={50} width={50} alt='icon' />
          <div>
            <h4>Choose Destination</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </li>

        <li>
          <Image src={''} height={50} width={50} alt='icon' />
          <div>
            <h4>Make Payment</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </li>

        <li>
          <Image src={''} height={50} width={50} alt='icon' />
          <div>
            <h4>Reach Airport on Selected Date</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </li>
      </ul>

      <div>
        <Image src={''} height={50} width={50} alt='icon' />
        <h4>Trip To Greece</h4>
        <p>14-29 June | by Robbin joseph</p>
        <ul>
          <li>
            <button type='button' aria-label='d'>
              d
            </button>
          </li>
          <li>
            <button type='button' aria-label='e'>
              e
            </button>
          </li>
          <li>
            <button type='button' aria-label='l'>
              l
            </button>
          </li>
        </ul>
        <p>24 people going</p>
      </div>
    </section>
  );
};

export default Booking;
