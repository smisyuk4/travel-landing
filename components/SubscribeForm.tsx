import { EmailIcon } from '@/assets/icons';

const SubscribeForm = () => {
  return (
    <div className='bg-custom-bg-color-200 h-[300px] w-[900px] rounded-tl-[100px] mx-auto p-14'>
      <h3 className='text-2xl font-bold mb-10 text-center text-custom-text-color-400'>
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h3>

      <form className='flex items-center justify-between'>
        <label className='w-[60%] relative focus-within:text-red-600'>
          <EmailIcon className='absolute inset-y-0 left-0 flex items-center pl-2 h-5 w-5' />
          <input
            className='w-full rounded-md px-5 py-2 text-lg bg-custom-bg-color-100 fontAwesome'
            id='email'
            placeholder='Your email'
            type='email'
          />
        </label>
        {/*<label class='relative block'>
          <input
            className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border
              border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
              focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            placeholder='Search for anything...'
            type='text'
            name='search'
          />
        </label>*/}

        <button className='w-[35%] subscribe-button' aria-label='Submit'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
