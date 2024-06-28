import { useDispatch } from 'react-redux';
import { increaseCount } from '../Redux/Actions';

const useUserClick = () => {
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increaseCount());
  };

  return { incrementCount };
};

export default useUserClick;
