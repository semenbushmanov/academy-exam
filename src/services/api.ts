import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true,
  [StatusCodes.CREATED]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<any>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};

export const api = createAPI();
