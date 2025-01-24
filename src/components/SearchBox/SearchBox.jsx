import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const statusFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.thumb}>
      <label>
        Find contact by name
        <input
          value={statusFilter}
          className={css.input}
          type="text"
          onChange={evt => {
            dispatch(changeFilter(evt.target.value));
          }}
        />
      </label>
    </div>
  );
};

export default SearchBox;
