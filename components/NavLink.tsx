import Link from 'next/link';

const NavLink = ({ path, label, title, onClickFunc = undefined }) => {
  return (
    <Link
      className='duration-200 ease-in-out hover:text-[#F1A501] focus:text-[#F1A501]'
      href={path}
      aria-label={label}
      onClick={onClickFunc}
    >
      {title}
    </Link>
  );
};

export default NavLink;
