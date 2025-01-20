import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = evt => {
    dispatch({ type: 'changeFilter', payload: evt.target.value });
  };

  return (
    <div className={css.thumb}>
      <label>
        Find contact by name
        <input
          // value={inputName}
          className={css.input}
          type="text"
          onChange={handleSearch}
        />
      </label>
    </div>
  );
};

export default SearchBox;
