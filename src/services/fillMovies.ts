import { getResource } from '../lib/axios';

export const getMovies = async (movieUrl: string) => {
    const movieList: Array<object> = [];
    let response;

    const fillMovieList = (movie: any) => {
        movieList.push({
            title: movie.title,
            id: movie.episode_id,
            releaseDate: movie.release_date,
        });
    };
    try {
        response = await getResource(movieUrl);
        fillMovieList(response);
    } catch (error) {}
    return movieList;
};
