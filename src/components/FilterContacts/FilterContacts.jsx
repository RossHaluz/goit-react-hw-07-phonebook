import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/filterSlice';
import { InputFilter } from './FilterContacts.styled';

const FilterContacts = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filter);

  const onChangeInput = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <InputFilter type="text" value={inputValue} onChange={onChangeInput} />
  );
};

export default FilterContacts;
