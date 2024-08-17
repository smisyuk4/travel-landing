import { EmailIcon } from '@/assets/icons';

const SubscribeForm = () => {
  return (
    <div className='bg-custom-bg-color-200 h-[300px] w-[900px] rounded-tl-[100px] mx-auto'>
      <h3>
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h3>

      <form>
        <label>
          <input id='email' placeholder='Your email' type='email' />
        </label>

        <button aria-label='Submit'>Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeForm;
