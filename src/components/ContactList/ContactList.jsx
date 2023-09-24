import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, removeContacts } from 'redux/contacts/contactsOperations';
import s from './ContactList.module.css';
import { contactsAfterFilter } from 'redux/contacts/contactsSelector';

const ContactList = () => {
  const contacts = useSelector(contactsAfterFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(el => (
        <li key={el.id} className={s.item}>
          <p className={s.text}>
            {el.name}: <span className={s.num}>{el.number}</span>
          </p>
          <button
            type="button"
            className={s.btn}
            onClick={() => dispatch(removeContacts(el.id))}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
