import { ImPhone, ImUser } from 'react-icons/im';
import s from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectLoading);
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.contact}>
      <p className={s.text}>
        <ImUser className={s.icon} />
        {name}
      </p>
      <p className={s.text}>
        <ImPhone className={s.icon} />
        {number}
      </p>
      <button onClick={handleDelete} disabled={isDeleting}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
