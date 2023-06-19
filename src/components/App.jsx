import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operators';
export const App = () => {

  const [filter, setFilter] = useState('');
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();


  useEffect(() => {
 dispatch(fetchContacts())
}, []); 

const addContact = newContact => {
    const { name, number } = newContact;
    if (contacts.find(contact => contact.name === name && contact.number === number) ) {
      alert(`A person with the name ${name} and the phone # ${number} already exist in the phone box` );
      return;
    }

    // const contact = {
    //   id: uuidv4(),
    //   name,
    //   number,
    // };
 
  //  setContacts(prevState => [...prevState, contact]);
 
  };


 const deleteContact = id => {
    // const updatedContacts = contacts.filter(contact => contact.id !== id);
    // setContacts(updatedContacts);
    // localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };


const onFilterChange = event => {
    setFilter(event.target.value);
  };

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query) ||
      contact.number.toLocaleLowerCase().includes(query)
    );

    if (query && !filteredContacts.length) {

      alert('No contacts matching your request')
    }

    return filteredContacts;
  };







  return (
    <div
      style={{
        height: '100vh',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: '0 auto',
        textAlign: 'center'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
        <h2> Contacts</h2>
        <Filter filter={filter} handleChange={onFilterChange} />
 <ContactList
          contacts={filterContacts()}
          handleDelete={deleteContact}
        />    </div>
  );
};
