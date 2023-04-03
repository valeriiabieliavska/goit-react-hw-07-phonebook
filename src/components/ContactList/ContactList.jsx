import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.length === 0 ? (
        <p className={css.message}>There are no contacts in the Phonebook</p>
      ) : (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={css.item} id={id}>
              {name}: {number}
              <button
                className={css.btnDelete}
                type="button"
                onClick={() => handleDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
