import Image from 'next/image';
import Link from 'next/link';

import NavLink from './NavLink';
import logo from '@/assets/Logo.png';
import { navLinks } from '@/constants/links';
import Burger from './Burger';
import { ArrowToBottom } from '@/assets/icons';

const Header = () => {
  return (
    <header className="flex justify-between items-center mt-14 after:content-[''] after:bg-[url('../assets/header-decore.svg')] after:block after:h-[700px] after:w-[700px] after:absolute after:top-0 after:right-0">
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
          <ArrowToBottom className={'h-4 w-4 stroke-black'} />
        </Link>
      </div>

      <Burger />
    </header>
  );
};

export default Header;
