import React, { useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER } from '../redux/slice'
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { selectFilter, filteredContacts, selectIsLoading, selectError } from 'redux/selectors';
import { Loader } from './Loader/Loader';


const App = () => {

  const dispatch = useDispatch();
  const filtered = useSelector(selectFilter);
  const contacts = useSelector(filteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    if (contacts.find(contact => contact.name === name && contact.phone === number )) {
      alert(`A contact with the name ${name} and number ${number} is already in contacts.`);
      return;
    }
    const newContact = {
      name: name,
      phone: number
    };
    dispatch(addContact(newContact));
  }

  const handleRemoveContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleChangeFilter = event => {
    dispatch(FILTER(event.target.value));
  };

  return (
    <div  style={{
        height: '100vh',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: '0 auto',
        textAlign: 'center'
      }}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <div>
        <p>
          All contacts: {isLoading ? <Loader /> : contacts.length}
        </p>
      </div>
      <Filter value={filtered} onChange={handleChangeFilter} />
      {error ? 'can`t load data, please check connection' :
        <ContactList
          contacts={contacts}
          onRemoveContact={handleRemoveContact}
        />}
    </div>
  );
}

export default App;