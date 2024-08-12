'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { ArrowToBottomIcon, BurgerIcon, CrossIcon } from '@/assets/icons';
import NavLink from './NavLink';
import { NAV_LINKS } from '@/constants/links';

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
        className='ml-auto mr-0 block'
        ref={burgerButtonRef}
        onClick={() => setIsOpenMenu(prev => !prev)}
      >
        {isOpenMenu ? (
          <CrossIcon className={'h-10 w-10 stroke-black'} />
        ) : (
          <BurgerIcon className={'h-10 w-10 stroke-black'} />
        )}
      </button>

      <div
        className={`absolute right-0 top-10 z-50 flex flex-col items-center rounded-bl-[60px] bg-[#FFF1DA] p-5 ${
          isOpenMenu
            ? 'translate-y-0'
            : '-translate-y-52 translate-x-12 scale-0'
        } duration-300 ease-in-out`}
        ref={menuRef}
      >
        <nav>
          <ul className='flex flex-col gap-6'>
            {NAV_LINKS.map(({ path, title }, idx) => (
              <li key={idx}>
                <NavLink
                  path={path}
                  label={title}
                  title={title}
                  onClickFunc={() => setIsOpenMenu(prev => !prev)}
                />
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className='mt-6 rounded-md border border-dark-blue px-4 py-2 duration-200 ease-in-out hover:bg-[#F1A501] focus:bg-[#F1A501]'
          href={''}
          aria-label='Sign up'
        >
          Sign up
        </Link>
        <Link className='mt-6 flex gap-1' href={''} aria-label='toggle lang'>
          EN
          <ArrowToBottomIcon className={'h-4 w-4 stroke-black'} />
        </Link>
      </div>
    </div>
  );
};

export default Burger;
//isOpenMenu ? 'scale-10 translate-y-16' : 'scale-0 translate-y-0'
