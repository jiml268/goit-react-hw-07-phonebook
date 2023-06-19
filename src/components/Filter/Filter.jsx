import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <label>Find contacts by Name or phone number </label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

