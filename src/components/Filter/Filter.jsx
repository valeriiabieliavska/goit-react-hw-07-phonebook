import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <label className={css.filter}>
      Filter contacts by name
      <input
        className={css.filterInput}
        value={filter}
        onChange={handleFilterChange}
        type="text"
      />
    </label>
  );
};

export default Filter;
