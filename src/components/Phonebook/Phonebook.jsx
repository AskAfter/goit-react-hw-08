import './PhoneBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import s from './PhoneBook.module.css';
import { ImShocked } from 'react-icons/im';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors.js';

function App() {
  const contacts = useSelector(selectContacts || []);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => abortController.abort();
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.header}>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList />}

      {contacts.length < 1 && !isLoading && !isError && (
        <h2 className={s.nothingFound}>
          Nothing found <ImShocked className={s.icon} />
        </h2>
      )}
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Whoops...</h2>}
    </div>
  );
}

export default App;
