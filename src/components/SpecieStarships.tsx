import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const SpecieStarships = ({ starships }: any): JSX.Element => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Model</th>
                                    <th>Starship Class</th>
                                    <th>Cost in credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                {starships.map(
                                    (starship: any, index: number) => (
                                        <tr key={index}>
                                            <td>
                                                <Link
                                                    to={`/starship/films/${[
                                                        index,
                                                    ]}`}
                                                >
                                                    {starship.name}
                                                </Link>
                                            </td>

                                            <td>{starship.model}</td>
                                            <td>{starship.starshipClass}</td>
                                            <td>{starship.costInCredits}</td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main(SpecieStarships);
