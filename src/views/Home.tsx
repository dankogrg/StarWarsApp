import { Link } from 'react-router-dom';
import SpecieCard from '../components/SpecieCard';
import Specie from '../entities/Specie';
import Main from '../layouts/Main';

type homeProps = {
    species: Array<Specie>;
    isLoaded: boolean;
};

const Home = (props: homeProps): JSX.Element => {
    const { species } = props;

    return (
        <div className="container m-5">
            <div className="row">
                {species.map((specie, index) => (
                    <div key={index} className="col-4">
                        <Link to={`specie/${specie.name}`}>
                            <SpecieCard key={index} specie={specie} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main(Home);
