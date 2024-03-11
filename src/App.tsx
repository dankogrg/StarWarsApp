import { useEffect, useState } from 'react';
import { getSpecies } from './services/Species';
import Specie from './entities/Specie';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import { default as SpecieView } from './views/Specie';
import Movies from './views/Movies';

const speciesInitialState: Array<Specie> = [];
const isLoadedInitialState: boolean = false;

const App = (): JSX.Element => {
    const [species, setSpecies] = useState<Array<Specie>>(speciesInitialState);
    const [isLoaded, setIsLoaded] = useState<boolean>(isLoadedInitialState);

    useEffect(() => {
        const species = getSpecies('Human', 'Droid', 'Wookie');
        species
            .then((data: Array<Specie>) => setSpecies(data))
            .catch((error: any) => console.warn('Nekaj ne dela!!!'))
            .finally(() => setIsLoaded(true));
    }, []);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            species={species}
                            isLoaded={isLoaded}
                            nav="Home"
                        />
                    }
                />
                <Route
                    path="starship/films/:starshipIndex"
                    element={
                        <Movies
                            species={species}
                            isLoaded={isLoaded}
                            specieName="wookiee"
                        />
                    }
                />
                <Route
                    path="/specie/:specieName"
                    element={
                        <SpecieView species={species} isLoaded={isLoaded} />
                    }
                />
            </Routes>
        </>
    );
};

export default App;
