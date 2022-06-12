import api from './api';

export async function bookRoom(body, token) {
  const response = await api.post('/room', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getSelectedRoom(token) {
  const response = await api.get('/room', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteBedRental(body, token) {
  const response = await api.delete('/room', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: body,
  });
  return response.data;
}
