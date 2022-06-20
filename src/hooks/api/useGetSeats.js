import useAsync from '../useAsync';

import * as activityApi from '../../services/activityApi';

export default function useSeats() {
  const {
    act: getSeats,
  } = useAsync(activityApi.getSeatsByActivityAndLocationId);  
  return {
    getSeats,
  };
}
