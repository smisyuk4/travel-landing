'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  label: string;
  title: string;
  onClick?: () => void;
}

const NavLink = ({ href, label, title, onClick }: Props) => {
  const path = usePathname();

  return (
    <Link
      className={`hav-link ${path.startsWith(href) ? 'active' : undefined}`}
      href={href}
      aria-label={label}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;
