import { useEffect, useState } from 'react';
import WithRouter from '../layouts/WithRouter';
import { getUser } from '../services/Users';
import SpecieVehicles from '../components/SpecieVehicles';
import { PromiseAll } from '../services/Promise';
import { getVehicles } from '../services/Vehicles';
import SpecieStarships from '../components/SpecieStarships';
import { getStarships } from '../services/Starships';

const isLoadedInitialState: boolean = false;
const userInitialState: string = '';
const vehiclesInitialState: Array<any> = [];
const starshipsInitialState: Array<any> = [];

const Specie = ({ species, params }: any) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(isLoadedInitialState);
    const [user, setUser] = useState<string>(userInitialState);
    const [vehicles, setVehicles] = useState<any[]>(vehiclesInitialState);
    const [starships, setStarships] = useState<any[]>(starshipsInitialState);

    const { specieName } = params;

    useEffect(() => {
        setIsLoaded(false);

        const userUrl: string = species.find(
            ({ name }: any) => name === specieName,
        )?.people[0];

        const getSpecieTransport =
            specieName != 'Wookiee' ? getVehicles : getStarships;

        try {
            PromiseAll([getUser(userUrl), getSpecieTransport(specieName)])
                .then((result) => {
                    setUser(result[0].name);
                    specieName != 'Wookiee'
                        ? setVehicles(result[1])
                        : setStarships(result[1]);
                })
                .catch((error) => console.warn(error))
                .finally(() => setIsLoaded(true));
        } catch (error) {}
    }, [specieName, species]);
    return (
        <div>
            {specieName != 'Wookiee' ? (
                <SpecieVehicles
                    isLoaded={isLoaded}
                    specieName={specieName}
                    species={species}
                    user={user}
                    vehicles={vehicles}
                />
            ) : (
                <SpecieStarships
                    isLoaded={isLoaded}
                    specieName={specieName}
                    species={species}
                    user={user}
                    starships={starships}
                />
            )}
        </div>
    );
};

export default WithRouter(Specie);
