import Specie from '../entities/Specie';
import Main from '../layouts/Main';

const StarshipMovies = ({ movies }: any): JSX.Element => {
    const m = movies.map((movie: any) => movie.then((data: any) => data[0]));
    console.log(m);

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
                            <tbody>
                                {m.map((movie: any, index: number) => (
                                    <tr key={index}>
                                        <td>{movie.title}</td>
                                        <td>{movie.id}</td>
                                        <td>{movie.releaseDate}</td>
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
