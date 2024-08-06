import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/Logo.png';

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
    <header className='flex justify-between items-center'>
      <Link href={'/'} aria-label={'home'}>
        <Image src={logo} alt={'logo'} />
      </Link>

      <div className='flex items-center'>
        <nav>
          <ul className='flex gap-14'>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.path} aria-label={link.title}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className='border border-dark-blue rounded-md py-2 px-5 ml-14'
          href={''}
          aria-label='Sign up'
        >
          Sign up
        </Link>
        <Link className='ml-14' href={''} aria-label='toggle lang'>
          EN
        </Link>
      </div>
    </header>
  );
};

export default Header;
