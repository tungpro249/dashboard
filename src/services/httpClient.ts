import axios, { AxiosError } from 'axios';

class APIError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, APIError.prototype);
  }
}

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status ?? 500;
    const message = error.message || 'An unexpected error occurred';

    switch (status) {
      case 401:
      case 403:
      case 400:
      case 404:
      case 409:
      case 422:
        return Promise.reject(new APIError(message, status));

      default:
        return Promise.reject(new APIError(message, 500));
    }
  }
);

export default httpClient;
