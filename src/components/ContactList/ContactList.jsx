import css from './ContactList.module.css';



const ContactList = ({ contacts, onRemoveContact }) => {
  console.log(contacts)
  return (
    <ul className={css.contactList}>
      {contacts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1).map(({ id, name, phone }) => (
        <li
          key={id}
        className={css.contactListItem}>
          <p>
            {name}, {phone}
          </p>
          <button
            className={css.contactListItemBtn}
            type="submit"
            onClick={() => onRemoveContact(id)}
          >
            del
          </button>
        </li>
      ))}
    </ul>
  )
};


export default ContactList;