import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts || []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required field')
      .min(3, 'Too short name')
      .max(50, 'Too long name')
      .matches(
        /^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' -][a-zA-Zа-яА-ЯіІїЇєЄ ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$/,
        'Invalid name'
      ),
    number: Yup.string()
      .required('Required field')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number'),
  });

  const handleNumberChange = (e, setFieldValue) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3 && value.length <= 5) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 5) {
      value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5, 7)}`;
    }
    setFieldValue('number', value || '');
  };

  const handleSubmit = (values, actions) => {
    const isNumberExist = contacts.some(
      contact => contact.number === values.number
    );

    if (isNumberExist) {
      alert(`${values.number} is already in contacts`);
      actions.setSubmitting(false);
      return;
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue }) => (
        <Form className={s.form}>
          <div className={s.inputGroup}>
            <label className={s.label}>
              <span>Name</span>
              <Field
                type="text"
                name="name"
                placeholder="Type name here"
                className={s.input}
              />
            </label>
            <ErrorMessage name="name" component="p" className={s.error} />
          </div>
          <div className={s.inputGroup}>
            <label className={s.label}>
              <span>Number</span>
              <Field name="number">
                {({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    placeholder="123-45-67"
                    className={s.input}
                    onChange={e => handleNumberChange(e, setFieldValue)}
                    value={field.value || ''}
                  />
                )}
              </Field>
            </label>
            <ErrorMessage name="number" component="p" className={s.error} />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
