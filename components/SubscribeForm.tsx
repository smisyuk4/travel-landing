'use client';
import { useState } from 'react';
import { EmailIcon } from '@/assets/icons';

const SubscribeForm = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='bg-custom-bg-color-200 h-[300px] w-[900px] rounded-tl-[100px] mx-auto p-14'>
      <h3 className='text-2xl font-bold mb-10 text-center text-custom-text-color-400'>
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h3>

      <form className='flex items-center justify-between'>
        <label className='w-[60%] relative'>
          {inputValue === '' && (
            <EmailIcon
              className='absolute top-3 left-1 flex items-center pl-2 h-6 w-8
                stroke-custom-text-color-400'
            />
          )}

          <input
            className='w-full rounded-md px-10 py-2 text-lg bg-custom-bg-color-100
              placeholder-custom-text-color-400'
            id='email'
            placeholder='Your email'
            type='email'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </label>

        <button className='main-button w-[35%]' aria-label='Submit'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
