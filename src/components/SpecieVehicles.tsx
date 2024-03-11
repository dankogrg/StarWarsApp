import Main from '../layouts/Main';
import { convertToLocaleDateAndTime } from '../utils/helpers';

const SpecieVehicles = ({ vehicles }: any): JSX.Element => {
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
                                    <th>Manufacturer</th>
                                    <th>Cost in credits</th>
                                    <th>Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehicles.map((vehicle: any, index: number) => (
                                    <tr key={index}>
                                        <td>{vehicle.name}</td>
                                        <td>{vehicle.model}</td>
                                        <td>{vehicle.manufacturer}</td>
                                        <td>{vehicle.costInCredits}</td>
                                        <td>
                                            {convertToLocaleDateAndTime(
                                                vehicle.created,
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

export default Main(SpecieVehicles);
