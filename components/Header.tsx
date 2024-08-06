import Image from 'next/image';
import Link from 'next/link';

import NavLink from './NavLink';
import logo from '@/assets/Logo.png';
import arrowToBottom from '@/assets/icons/arrow-to-bottom.svg';
import headerDecore from '@/assets/header-decore.svg';

const navLinks = [
  {
    title: 'Desitnations',
    path: 'desitnations',
  },
  {
    title: 'Hotels',
    path: 'hotels',
  },
  {
    title: 'Flights',
    path: 'flights',
  },
  {
    title: 'Bookings',
    path: 'bookings',
  },
];

const Header = () => {
  return (
    <header className='flex justify-between items-center mt-14'>
      <Link href={'/'} aria-label={'home'}>
        <Image src={logo} alt={'logo'} priority />
      </Link>

      <div className='flex items-center z-50'>
        <nav>
          <ul className='flex gap-14'>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  path={link.path}
                  label={link.title}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className='border border-dark-blue rounded-md py-2 px-5 ml-14 hover:bg-[#F1A501]  focus:bg-[#F1A501] ease-in-out duration-200'
          href={''}
          aria-label='Sign up'
        >
          Sign up
        </Link>
        <Link className='flex gap-1 ml-14' href={''} aria-label='toggle lang'>
          EN
          <Image src={arrowToBottom} alt={'arrow to bottom'} priority />
        </Link>
      </div>

      <Image
        className='absolute top-0 right-0'
        src={headerDecore}
        alt='header decore'
      />
    </header>
  );
};

export default Header;
