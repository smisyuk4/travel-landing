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
    <header>
      <Link href={'/'} aria-label={'home'}>
        <Image src={logo} alt={'logo'} />
      </Link>

      <nav>
        <ul>
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link href={link.path} aria-label={link.title}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
