import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(s.navLink, isActive && s.active)
              }
              to="/registration"
            >
              Registration
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
    </>
  );
};
export default AuthNav;
