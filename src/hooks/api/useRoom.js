import useAsync from '../useAsync';
import useToken from '../useToken';

import * as roomApi from '../../services/roomApi';

export default function useRoom() {
  const token = useToken();
  
  const {
    data: bed,
    loading: roomLoading,
    error: roomError,
    act: getRoom
  } = useAsync(() => roomApi.getSelectedRoom(token));

  return {
    bed,
    roomLoading,
    roomError,
    getRoom
  };
}
