import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { setFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <input
        // value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        className={s.input}
        type="text"
        placeholder="search..."
      />
    </div>
  );
};

export default SearchBox;
