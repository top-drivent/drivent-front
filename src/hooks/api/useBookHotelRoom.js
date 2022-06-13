import useAsync from '../useAsync';

import * as roomApi from '../../services/roomApi';

export default function useBookHotelRoom() {
  const { 
    data: hotel, 
    loading: hotelLoading, 
    error: hotelError, 
    act: selectRoom } = useAsync(roomApi.bookRoom, false);
  
  return {
    selectRoom
  };
}
