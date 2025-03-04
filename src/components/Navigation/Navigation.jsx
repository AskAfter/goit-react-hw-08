import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  return (
    <>
      <nav className={s.nav}>
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
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
