import ContactForm from './ContactForm/ContactForm';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import { useSelector } from 'react-redux';
import {
  getStateItems,
  getStateLoading,
} from 'redux/contacts/contactsSelector';

export const App = () => {
  const contacts = useSelector(getStateItems);
  const isLoanding = useSelector(getStateLoading);

  isLoanding ? Loading.hourglass('Wait') : Loading.remove('Wait');

  return (
    <div className={s.wrap}>
      <div className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <Filter title="Find contacts by name" />
      </div>

      <div className={`${s.contacts} Wait`}>
        <h2 className={s.subTitle}>Contacts: {contacts.length}</h2>
        <ContactList />
      </div>
    </div>
  );
};
