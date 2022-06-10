import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';

export default function useHotel() {
  const { data: hotels, loading: hotelLoading, error: hotelError, act: getHotels } = useAsync(hotelApi.getHotels);

  return {
    hotels,
    hotelLoading,
    hotelError,
    getHotels,
  };
}
