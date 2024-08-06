import Link from 'next/link';

const NavLink = ({ path, label, title }) => {
  return (
    <Link
      className='hover:text-[#F1A501] focus:text-[#F1A501] ease-in-out duration-200'
      href={path}
      aria-label={label}
    >
      {title}
    </Link>
  );
};

export default NavLink;
