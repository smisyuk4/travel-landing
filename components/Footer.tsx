import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/Logo.png';
import { FOOTER_LINKS } from '@/constants/footer';

const Footer = () => {
  return (
    <footer className='bg-custom-bg-color-100'>
      <div className='container mx-auto flex justify-between section'>
        <Link
          className='z-40 flex flex-col gap-3 w-60'
          href={'/'}
          aria-label={'home'}
        >
          <Image
            className='h-auto w-40 md:h-10'
            src={logo}
            alt={'logo'}
            priority
          />

          <p>Book your trip in minute, get full Control for much longer.</p>
        </Link>

        <nav>
          <h3 className='footer-nav-title'>{FOOTER_LINKS.company.title}</h3>
          <ul className='flex flex-col gap-2'>
            {FOOTER_LINKS.company.links.map(({ label, path }, idx) => (
              <li key={idx}>
                <Link className='hav-link' href={path} aria-label={label}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className='footer-nav-title'>{FOOTER_LINKS.contact.title}</h3>
          <ul className='flex flex-col gap-2'>
            {FOOTER_LINKS.contact.links.map(({ label, path }, idx) => (
              <li key={idx}>
                <Link className='hav-link' href={path} aria-label={label}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className='footer-nav-title'>{FOOTER_LINKS.more.title}</h3>
          <ul className='flex flex-col gap-2'>
            {FOOTER_LINKS.more.links.map(({ label, path }, idx) => (
              <li key={idx}>
                <Link className='hav-link' href={path} aria-label={label}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className='text-center pb-7 text-custom-text-color-400'>
        All rights reserved@jadoo.co
      </p>
    </footer>
  );
};

export default Footer;
