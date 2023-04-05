import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';

const ContactList = () => {
  const { items: contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) return null;

  const filteredContacts = contacts.filter(
    contact =>
      contact?.name &&
      contact.name.toLowerCase().includes(filter?.toLowerCase() ?? '')
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
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete.
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
