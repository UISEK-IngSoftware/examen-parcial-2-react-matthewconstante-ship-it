import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://futuramaapi.com/api',
  timeout: 10000,
});

export const getCharacters = async (page = 1) => {
  try {
    const response = await apiClient.get('/characters', {
      params: {
        orderBy: 'id',
        orderByDirection: 'asc',
        page: page,
        size: 50,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
    throw error;
  }
};