import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <>
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
        {isLoggedIn && (
          <button className={s.button} onClick={() => dispatch(logout())}>
            Logout
          </button>
        )}
      </nav>
    </>
  );
};
export default UserMenu;
