import useAsync from '../useAsync';

import * as activityApi from '../../services/activityApi';

export default function useActivity() {
  const {
    data: activities,
    loading: activityLoading,
    error: activityError,
    act: getActivities,
  } = useAsync(activityApi.getActivities);

  return {
    activities,
    activityLoading,
    activityError,
    getActivities,
  };
}
