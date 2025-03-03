import { Field, Form, Formik } from 'formik';
import s from './Login.module.css';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
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
export default Login;
