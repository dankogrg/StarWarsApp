import Specie from '../entities/Specie';
import { getResource } from '../lib/axios';
import { SPEICES_API_URL } from '../utils/endpoints';

export const getSpecies = async (...speciesParams: Array<string>) => {
    const specieList: Array<Specie> = [];

    const fillSpecieList = (species: Array<any>) => {
        for (const specie of species) {
            specieList.push({
                name: specie.name,
                classification: specie.classification,
                designation: specie.designation,
                language: specie.language,
                people: specie.people,
            });
        }
    };

    try {
        if (speciesParams.length === 0) {
            const species = await getResource(SPEICES_API_URL);

            fillSpecieList(species.results);
        } else {
            for (const specieName of speciesParams) {
                const specie = await getResource(
                    `${SPEICES_API_URL}?search=${specieName}`,
                );

                fillSpecieList(specie.results);
            }
        }
    } catch (error) {}

    return specieList;
};
