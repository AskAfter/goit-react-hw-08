import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <h3 className={s.userName}>Welcome {user.name}</h3>
      <nav className={s.nav}>
        <button className={s.button} onClick={() => dispatch(logout())}>
          Logout
        </button>
      </nav>
    </>
  );
};
export default UserMenu;
