import { EmailIcon } from '@/assets/icons';

const SubscribeForm = () => {
  return (
    <div className='bg-custom-bg-color-200 h-[300px] w-[900px] rounded-tl-[100px] mx-auto p-14'>
      <h3 className='text-2xl font-bold mb-10 text-center text-custom-text-color-400'>
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h3>
      {/*focus-within:hidden*/}
      <form className='flex items-center justify-between'>
        <label className='w-[60%] relative'>
          <EmailIcon className='absolute top-3 left-0 flex items-center pl-2 h-6 w-8' />
          <input
            className='w-full rounded-md px-5 py-2 text-lg bg-custom-bg-color-100'
            id='email'
            placeholder='Your email'
            type='email'
          />
        </label>

        <button className='w-[35%] subscribe-button' aria-label='Submit'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
