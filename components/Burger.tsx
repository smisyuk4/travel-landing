'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { ArrowToBottomIcon, BurgerIcon, CrossIcon } from '@/assets/icons';
import NavLink from './NavLink';
import { navLinks } from '@/constants/links';

const Burger = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const burgerButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpenMenu) {
      return;
    }
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpenMenu]);

  const handleDocumentClick = ({ target }) => {
    if (
      menuRef.current &&
      !burgerButtonRef.current.contains(target) &&
      !menuRef.current.contains(target)
    ) {
      setIsOpenMenu(false);
    }
  };

  return (
    <div className='relative z-40 md:hidden'>
      <button
        className='block mr-0 ml-auto'
        ref={burgerButtonRef}
        onClick={() => setIsOpenMenu((prev) => !prev)}
      >
        {isOpenMenu ? (
          <CrossIcon className={'h-10 w-10 stroke-black'} />
        ) : (
          <BurgerIcon className={'h-10 w-10 stroke-black'} />
        )}
      </button>

      <div
        className={`absolute top-10 right-0 flex flex-col items-center p-5 z-50 rounded-bl-[60px] bg-[#FFF1DA] ${
          isOpenMenu
            ? 'translate-y-0'
            : '-translate-y-52 translate-x-12 scale-0'
        } ease-in-out duration-300`}
        ref={menuRef}
      >
        <nav>
          <ul className='flex flex-col gap-6'>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  path={link.path}
                  label={link.title}
                  title={link.title}
                  onClickFunc={() => setIsOpenMenu((prev) => !prev)}
                />
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className='border border-dark-blue rounded-md py-2 px-4 mt-6 hover:bg-[#F1A501]  focus:bg-[#F1A501] ease-in-out duration-200'
          href={''}
          aria-label='Sign up'
        >
          Sign up
        </Link>
        <Link className='flex gap-1 mt-6' href={''} aria-label='toggle lang'>
          EN
          <ArrowToBottomIcon className={'h-4 w-4 stroke-black'} />
        </Link>
      </div>
    </div>
  );
};

export default Burger;
//isOpenMenu ? 'scale-10 translate-y-16' : 'scale-0 translate-y-0'
