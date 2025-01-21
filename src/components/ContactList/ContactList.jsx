import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const phonebook = useSelector(state => state.contacts.contacts.items);
  const statusFilter = useSelector(state => state.contacts.filters.name);
  const getVisibleContacts = (phonebook, statusFilter) => {
    // console.log(statusFilter);

    const newPhonebook = phonebook.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(statusFilter.toLowerCase().trim())
    );

    // const newPhonebook = phonebook.filter(
    //   contact => contact.name.toLowerCase().trim().includes(statusFilter)
    //   // .includes(statusFilter.toLowerCase().trim())
    // );

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
