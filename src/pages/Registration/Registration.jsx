import s from './Registration.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const Registration = () => {
  return (
    <div className={s.wrapper}>
      <RegistrationForm />
    </div>
  );
};
export default Registration;
