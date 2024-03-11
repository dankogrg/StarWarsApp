import { getResource } from '../lib/axios';
import { API_STARSHIPS_URL } from '../utils/endpoints';

export const getStarships = async (specieName: string) => {
    const starshipList: Array<any> = [];
    let response: any;

    const fillStarshipList = (starships: any) => {
        for (const starship of starships) {
            starshipList.push({
                name: starship.name,
                model: starship.model,
                starshipClass: starship.starship_class,
                costInCredits: starship.cost_in_credits,
                films: starship.films,
            });
        }
    };

    try {
        switch (specieName) {
            case 'Wookiee':
                response = await getResource(API_STARSHIPS_URL);
                break;

            default:
                throw new Error('Unknown specie name!');
        }

        fillStarshipList(response.results);
    } catch (error) {}

    return starshipList;
};
