import { getResource } from '../lib/axios';
import { API_VEHICLES_URL } from '../utils/endpoints';

export const getVehicles = async (specieName: string) => {

    const vehicleList: Array<any> = [];
    let response: any;

    const fillVehicleList = (vehicles: any) => {
        for (const vehicle of vehicles) {
            vehicleList.push({
                name: vehicle.name,
                model: vehicle.model,
                manufacturer: vehicle.manufacturer,
                costInCredits: vehicle.cost_in_credits,
                created: vehicle.created,
            });
        }
    };

    try {
        switch (specieName) {
            case 'Human':
                response = await getResource(API_VEHICLES_URL);
                break;
            case 'Droid':
                response = await getResource(
                    `${API_VEHICLES_URL}?search=droid`,
                );
                break;

            default:
                throw new Error('Unknown specie name!');
        }

        fillVehicleList(response.results);
    } catch (error) { }

    return vehicleList
};
