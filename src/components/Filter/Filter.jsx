import React from 'react';
import css from './Filter.module.css';


const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by Name or phone number
      <input
              className={css.filterName}
        placeholder='Find contact'
        type="name"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default Filter;