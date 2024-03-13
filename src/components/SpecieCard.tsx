import Specie from '../entities/Specie';
import { handleImage } from '../utils/helpers';

type specieProps = {
    specie: Specie;
};

const SpecieCard = (props: specieProps): JSX.Element => {
    const { specie } = props;

    return (
        <div className="card m-2">
            <div className="card-header">
                <img
                    src={handleImage(specie.name.toLowerCase())}
                    alt=""
                    className="card-img-top img-thumbnail"
                />
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b className="me-1">Classification:</b>
                    {specie.classification}
                </li>
                <li className="list-group-item">
                    <b className="me-1">Designation:</b>
                    {specie.designation}
                </li>
                <li className="list-group-item">
                    <b className="me-1">Language:</b>
                    {specie.language}
                </li>
            </ul>
        </div>
    );
};

export default SpecieCard;
