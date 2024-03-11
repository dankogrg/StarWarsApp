import { BASE_API_URL } from '../utils/endpoints';

export const getResource = async (url: string): Promise<Array<Object>> => {
    const response = await fetch(BASE_API_URL + url);
    const result = await response.json();
    return result.results;
};
