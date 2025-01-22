import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const phonebook = useSelector(state => state.phonebook.contacts.items);
  const statusFilter = useSelector(state => state.phonebook.filters.name);

  const getVisibleContacts = (phonebook, statusFilter) => {
    const newPhonebook = phonebook.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(statusFilter.toLowerCase().trim())
    );
    return newPhonebook;
  };

  const visibleContacts = getVisibleContacts(phonebook, statusFilter);

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <Contact {...contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
