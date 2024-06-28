import { useDispatch, useSelector } from 'react-redux';
import { increaseCount } from '../Redux/Actions';

const useUserClick = () => {
  const { clickCount } = useSelector(({ UserReducer }) => UserReducer);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increaseCount(clickCount + 1));
  };

  return { incrementCount };
};

export default useUserClick;
