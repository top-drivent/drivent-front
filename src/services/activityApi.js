import axios from 'axios';
import api from './api';

export async function getActivities() {
  const response = await api.get('/activities');
  return response.data;
}

export async function getSeats(body) {
  return await api.post('/activities/seatsByActivityAndLocationId', body);
}
