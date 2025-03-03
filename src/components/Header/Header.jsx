import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(s.navLink, isActive && s.active)
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(s.navLink, isActive && s.active)
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(s.navLink, isActive && s.active)
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(s.navLink, isActive && s.active)
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
