import { useDispatch } from 'react-redux';
import s from './RegistrationForm.module.css';
import { register } from '../../redux/auth/operations';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values))
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
            <span>Name:</span>
            <Field name="name" className={s.input} />
          </label>
          <label className={s.formElement}>
            <span>E-mail:</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.formElement}>
            <span>Password:</span>
            <Field name="password" type="password" className={s.input} />
          </label>
          <button className={s.button} type="submit">
            Registration
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
