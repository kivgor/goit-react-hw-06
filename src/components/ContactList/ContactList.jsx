import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const phonebook = useSelector(state => state.contacts.contacts.items);
  return (
    <>
      <ul className={css.list}>
        {phonebook.map(contact => (
          <Contact {...contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
