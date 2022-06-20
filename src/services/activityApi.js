import axios from 'axios';
import api from './api';

export async function getActivities() {
  const response = await api.get('/activities');
  return response.data;
}
//
export async function getSeatsByActivityAndLocationId(body) {
  return await axios.post('http://localhost:4000/activities/seatsByActivityAndLocationId', body);
}
