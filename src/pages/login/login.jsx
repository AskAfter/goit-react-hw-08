import s from './Login.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className={s.wrapper}>
      <LoginForm />
    </div>
  );
};
export default Login;
