import React from 'react';
import css from './ContactForm.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContacts } from 'redux/operators';
import { getContacts } from 'redux/selectors';
export default function ContactForm() {
   const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  function handleSubmit(e) {
    e.preventDefault();

    if (formData.name === '' || formData.number === '') {
      return;
    }
    const isContactExists = contacts.some(
      contact => contact.name === formData.name
    );
    const isNumberExists = contacts.some(
      contact => contact.number === formData.number
    );

    if (isContactExists) {
      alert(`${formData.name} is already in the contact list`);
      return;
    } else if (isNumberExists) {
      alert(`${formData.number} is already in the contact list`);
      return;
    }

    dispatch(addContacts(formData)).then(() => {
      dispatch(fetchContacts());
    });
  }


  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={(css.formName)}>
        Name
        <input
          className={(css.inputName, css.formInput)}
          onChange={e =>
            setFormData(prev => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          value={formData.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
      </label>
      <label className={(css.formNumber)}>
        Number
        <input
          className={(css.inputNum, css.formInput)}
          onChange={e =>
            setFormData(prev => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          value={formData.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

