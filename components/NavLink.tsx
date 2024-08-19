import Link from 'next/link';

interface Props {
  path: string;
  label: string;
  title: string;
  onClick?: () => void;
}

const NavLink = ({ path, label, title, onClick }: Props) => {
  return (
    <Link className='hav-link' href={path} aria-label={label} onClick={onClick}>
      {title}
    </Link>
  );
};

export default NavLink;
