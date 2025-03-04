import s from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className={s.wrapper}>
      <RegistrationForm />
    </div>
  );
};
export default RegistrationPage;
