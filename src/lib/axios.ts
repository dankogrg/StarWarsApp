import Axios, { AxiosInstance } from 'axios';
import { BASE_API_URL } from '../utils/endpoints';

const getAxiosInstance = (): AxiosInstance =>
    Axios.create({
        baseURL: BASE_API_URL,
    });

export const getResource = async (url: string): Promise<any> => {
    const response = await getAxiosInstance().get(url);
    return response.data;
};
