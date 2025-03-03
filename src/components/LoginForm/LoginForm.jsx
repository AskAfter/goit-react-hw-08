import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}`);
        navigate('/contacts', { replace: true });
      })
      .catch(() => {
        toast.error(`Sorry, you did something wrong...`);
      });
    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        className={s.formik}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.formElement}>
            <span>E-mail:</span>
            <Field name="email" type="email" className={s.input} />
          </label>
          <label className={s.formElement}>
            <span>Password:</span>
            <Field name="password" type="password" className={s.input} />
          </label>
          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
