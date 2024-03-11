import { useEffect, useState } from 'react';
import { PromiseAll } from '../services/Promise';
import { getUser } from '../services/Users';
import { getStarships } from '../services/Starships';
import WithRouter from '../layouts/WithRouter';
import { getMovies } from '../services/fillMovies';
import StarshipMovies from '../components/StarshipMovies';

const moviesInitialState: any = [];
const isLoadedInitialState: boolean = false;
const oneMovie: Object = {};

const Movies = ({ species, params }: any): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState<boolean>(isLoadedInitialState);
    const [movies, setMovies] = useState<any>(moviesInitialState);
    const [movie, setMovie] = useState<Object>(oneMovie);
    const user = 'Wookiee';
    const { starshipIndex } = params;
    useEffect(() => {
        setIsLoaded(false);
        PromiseAll([getStarships(user)])
            .then((result) => result[0][starshipIndex].films)
            .then((movieUrls) =>
                movieUrls.map((movieUrl: any) => getMovies(movieUrl)),
            )
            .then((movieList) => setMovies(movieList))
            .catch((error) => console.warn(error))
            .finally(() => setIsLoaded(true));
    }, []);
    console.log(movies);

    return (
        <div>
            <StarshipMovies
                isLoaded={isLoaded}
                movies={movies}
                user={user}
                species={species}
                specieName={user.toLocaleLowerCase()}
            />
        </div>
    );
};

export default WithRouter(Movies);
