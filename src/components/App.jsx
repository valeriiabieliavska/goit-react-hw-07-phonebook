import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
