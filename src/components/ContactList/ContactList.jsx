import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const getVisibleContacts = (phonebook, statusFilter) => {
    return phonebook.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(statusFilter.toLowerCase().trim())
    );
  };

  const phonebook = useSelector(state => state.contacts.contacts.items);
  const statusFilter = useSelector(state => state.contacts.filters);
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
