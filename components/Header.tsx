import Image from 'next/image';
import Link from 'next/link';

import NavLink from './NavLink';
import logo from '@/assets/Logo.png';
import { navLinks } from '@/constants/links';
import Burger from './Burger';
import { ArrowToBottomIcon } from '@/assets/icons';

const Header = () => {
  return (
    <header className="flex justify-between items-center mt-4 md:mt-14 after:content-[''] after:bg-[url('../assets/header-decore.svg')] after:block after:w-[300px] after:h-[550px] sm:after:w-[550px] sm:after:h-[700px] md:after:w-[700px] after:absolute after:top-0 after:right-0">
      <Link className='z-40' href={'/'} aria-label={'home'}>
        <Image
          className='h-7 w-auto md:h-10'
          src={logo}
          alt={'logo'}
          priority
        />
      </Link>

      <div className='hidden md:flex items-center z-50'>
        <nav>
          <ul className='flex gap-7 lg:gap-14'>
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
          className='border border-dark-blue rounded-md py-2 px-5 ml-7 lg:ml-14 hover:bg-[#F1A501]  focus:bg-[#F1A501] ease-in-out duration-200'
          href={''}
          aria-label='Sign up'
        >
          Sign up
        </Link>
        <Link
          className='flex gap-1 ml-7 lg:ml-14'
          href={''}
          aria-label='toggle lang'
        >
          EN
          <ArrowToBottomIcon className={'h-4 w-4 stroke-black'} />
        </Link>
      </div>

      <Burger />
    </header>
  );
};

export default Header;
