import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <div className={s.container}>
      <input
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        className={s.input}
        type="text"
        placeholder="search..."
      />
    </div>
  );
};

export default SearchBox;
