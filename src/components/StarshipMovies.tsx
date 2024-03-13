import Main from '../layouts/Main';
import { convertToLocaleDateAndTime, handleImage } from '../utils/helpers';

const StarshipMovies = ({ movies }: any): JSX.Element => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Episode Id</th>
                                    <th>Release Date</th>
                                </tr>
                            </thead>
                            <tbody style={{ verticalAlign: 'middle' }}>
                                {movies.map((movie: any, index: number) => (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={handleImage(
                                                    `f${movie.id}`,
                                                )}
                                                alt=""
                                            />
                                        </td>
                                        <td
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: '30px',
                                            }}
                                        >
                                            {movie.title}
                                        </td>
                                        <td>{movie.id}</td>
                                        <td>
                                            {convertToLocaleDateAndTime(
                                                movie.releaseDate,
                                                'hr',
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main(StarshipMovies);
