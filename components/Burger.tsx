'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { ArrowToBottomIcon, BurgerIcon, CrossIcon } from '@/assets/icons';
import NavLink from './NavLink';
import { NAV_LINKS } from '@/constants/links';

const Burger = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpenMenu) {
      return;
    }
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpenMenu]);

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !burgerButtonRef?.current?.contains(event.target as Node) &&
      !menuRef.current?.contains(event.target as Node)
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
        aria-label='burger menu'
      >
        {isOpenMenu ? (
          <CrossIcon className={'h-10 w-10 stroke-black'} />
        ) : (
          <BurgerIcon className={'h-10 w-10 stroke-black'} />
        )}
      </button>

      <div
        className={`absolute right-0 top-10 z-50 flex flex-col items-center rounded-bl-[60px]
          bg-[#FFF1DA] p-5 ${
          isOpenMenu
              ? 'translate-y-0'
              : '-translate-y-52 translate-x-12 scale-0'
          } duration-300 ease-in-out`}
        ref={menuRef}
      >
        <nav>
          <ul className='flex flex-col gap-6'>
            {NAV_LINKS.map(({ href, title }, idx) => (
              <li key={idx}>
                <NavLink
                  href={href}
                  label={title}
                  title={title}
                  onClick={() => setIsOpenMenu(prev => !prev)}
                />
              </li>
            ))}
          </ul>
        </nav>

        <Link className='mt-6 main-button' href={''} aria-label='Sign up'>
          Sign up
        </Link>
        {/*<Link className='mt-6 flex gap-1' href={''} aria-label='toggle lang'>
          EN
          <ArrowToBottomIcon className={'h-4 w-4 stroke-black'} />
        </Link>*/}
      </div>
    </div>
  );
};

export default Burger;
