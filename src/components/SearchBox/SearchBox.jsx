import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const statusFilter = useSelector(state => state.contacts.filters.name);
  // console.log(statusFilter);

  const dispatch = useDispatch();

  const handleSearch = evt => {
    dispatch({ type: 'changeFilter', payload: evt.target.value });
  };

  return (
    <div className={css.thumb}>
      <label>
        Find contact by name
        <input
          value={statusFilter}
          className={css.input}
          type="text"
          onChange={handleSearch}
        />
      </label>
    </div>
  );
};

export default SearchBox;
