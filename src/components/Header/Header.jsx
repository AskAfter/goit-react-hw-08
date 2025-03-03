import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header className={s.header}>
      {isLoggedIn && <h3 className={s.userName}>Welcome {user.name}</h3>}
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

          {!isLoggedIn && (
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
          )}
          {!isLoggedIn && (
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
          )}
        </ul>
        {isLoggedIn && <button className={s.button}>Logout</button>}
      </nav>
    </header>
  );
};
export default Header;
