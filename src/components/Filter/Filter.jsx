import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import { getStateFilter } from 'redux/contacts/contactsSelector';

const Filter = ({ title }) => {
  const value = useSelector(getStateFilter);
  const dispatch = useDispatch();
  return (
    <>
      <p className={s.title}>{title}</p>
      <input
        type="text"
        placeholder="Enter name"
        className={s.input}
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
