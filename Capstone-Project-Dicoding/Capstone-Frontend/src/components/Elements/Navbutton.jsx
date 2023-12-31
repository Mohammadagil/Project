import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const NavButton = ({ to, label }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`text-${
        location.pathname === to ? 'cyan-900' : 'gray-400'
      } py-4 md:py-0 border-b border-stone-400 md:border-0`}
    >
      {label}
    </Link>
  );
};

export default NavButton;
