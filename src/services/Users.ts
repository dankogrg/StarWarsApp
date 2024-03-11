import { getResource } from '../lib/axios';

export const getUser = async (url: string) => {
    try {
        if (!url) {
            throw Error('Nema URL-a');
        }

        return await getResource(url);
    } catch (error) {}
};
