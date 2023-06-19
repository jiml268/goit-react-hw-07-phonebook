import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <ul className={css.contactList}>
            {contacts && contacts
            
            .sort( (a,b)=>a.name > b.name ? 1 : -1)
            .map((contact, id) => (
        <li key={id} className={css.contactListItem}>
          {contact.name}: {contact.phone}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

