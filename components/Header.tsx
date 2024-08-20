import Image from 'next/image';
import Link from 'next/link';

import NavLink from './NavLink';
import logo from '@/assets/Logo.png';
import { NAV_LINKS } from '@/constants/links';
import Burger from './Burger';
import { ArrowToBottomIcon } from '@/assets/icons';

const Header = () => {
  return (
    <header
      className="container mx-auto mt-4 flex items-center justify-between after:absolute
        after:right-0 after:top-0 after:block after:h-[550px] after:w-[300px]
        after:bg-[url('../assets/header-decore.svg')] after:content-['']
        sm:after:h-[700px] sm:after:w-[550px] md:mt-14 md:after:w-[700px]"
    >
      <Link className='z-40' href={'/'} aria-label={'home'}>
        <Image
          className='h-7 w-auto md:h-10'
          src={logo}
          alt={'logo'}
          priority
        />
      </Link>

      <div className='z-50 hidden items-center md:flex'>
        <nav>
          <ul className='flex gap-7 lg:gap-14'>
            {NAV_LINKS.map(({ href, title }, idx) => (
              <li key={idx}>
                <NavLink href={href} label={title} title={title} />
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className='main-button ml-7 lg:ml-14 h-[40px]'
          href={''}
          aria-label='Sign up'
        >
          Sign up
        </Link>
        {/*<Link
          className='ml-7 flex gap-1 lg:ml-14'
          href={''}
          aria-label='toggle lang'
        >
          EN
          <ArrowToBottomIcon className={'h-4 w-4 stroke-black'} />
        </Link>*/}
      </div>

      <Burger />
    </header>
  );
};

export default Header;
