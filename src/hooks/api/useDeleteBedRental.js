import useAsync from '../useAsync';
import * as roomApi from '../../services/roomApi';

export default function useDeleteBedRental() {
  const { act: deleteRental } = useAsync(roomApi.deleteBedRental, false);
  return {
    deleteRental
  };
}
