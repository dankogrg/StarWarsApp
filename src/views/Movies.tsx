import { useEffect, useState } from 'react';
import { PromiseAll } from '../services/Promise';
import { getStarships } from '../services/Starships';
import WithRouter from '../layouts/WithRouter';
import { getMovies } from '../services/fillMovies';
import StarshipMovies from '../components/StarshipMovies';

const moviesInitialState: Array<Object> = [{}];
const isLoadedInitialState: boolean = false;

const Movies = ({ species, params }: any): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState<boolean>(isLoadedInitialState);
    const [movies, setMovies] = useState<Object>(moviesInitialState);
    const specieName = 'Wookiee';
    const user = 'Chewbacca';
    const { starshipIndex } = params;
    useEffect(() => {
        setIsLoaded(false);

        PromiseAll([getStarships(specieName)])
            .then((result) => result[0][starshipIndex].films)
            .then((movieUrls) =>
                PromiseAll(
                    movieUrls.map((movieUrl: string) =>
                        getMovies(movieUrl).then(
                            (data: Array<object>) => data[0],
                        ),
                    ),
                ),
            )
            .then((movieList) => setMovies(movieList))
            .catch((error) => console.warn(error))
            .finally(() => setIsLoaded(true));
    }, []);

    function add(n: any): any {
        if (n == 20) {
            return n;
        }
        return add(n + 1);
    }
    console.log(add(1));

    return (
        <div>
            <StarshipMovies
                isLoaded={isLoaded}
                movies={movies}
                user={user}
                species={species}
                specieName={specieName}
            />
        </div>
    );
};

export default WithRouter(Movies);
