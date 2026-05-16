import api from './api';

import { ENDPOINTS } from './endpoints';

const API_KEY = 'YOUR_NEWS_API_KEY';

export const getTopHeadlines = async () => {
  try {
    const response = await api.get(
      `${ENDPOINTS.TOP_HEADLINES}?country=us&apiKey=${API_KEY}`,
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
