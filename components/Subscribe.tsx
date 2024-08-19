import SubscribeForm from './SubscribeForm';

const Subscribe = () => {
  return (
    <section
      className='section flex justify-between bg-custom-bg-color-100'
      id='subscribe'
    >
      <div className='container mx-auto'>
        <h2 className='hidden'>Subscribe</h2>

        <SubscribeForm />
      </div>
    </section>
  );
};

export default Subscribe;
