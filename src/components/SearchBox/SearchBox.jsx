import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const statusFilter = useSelector(state => state.filters.filters.name);
  const dispatch = useDispatch();

  const handleSearch = evt => {
    dispatch(changeFilter(evt.target.value));
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
