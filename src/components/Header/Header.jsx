import UserMenu from '../UserMenu/UserMenu';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <UserMenu />
    </header>
  );
};
export default Header;
