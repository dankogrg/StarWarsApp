import { Link } from 'react-router-dom';
import { handleImage } from '../utils/helpers';

const navbarLink = {
    link: {
        color: '#666',
    },
    active: {
        color: '#fff',
    },
};

const Navbar = ({ species, specieName, user }: any): JSX.Element => {
    return (
        <div
            className="navbar navbar-expand-lg bg-dark border-bottom border-body"
            data-bs-theme="dark"
        >
            <div className="container">
                <div className="navbar-brand text-light">
                    <img
                        src={handleImage(specieName.toLowerCase())}
                        className="d-inline align-top me-2"
                        width={30}
                        height={30}
                    />

                    {user}
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        {species.map((specie: any, index: any) => (
                            <Link
                                to={`/specie/${specie.name}`}
                                className={`nav-link`}
                                style={
                                    specieName === specie.name
                                        ? navbarLink.active
                                        : navbarLink.link
                                }
                                key={index}
                            >
                                {specie.name}
                            </Link>
                        ))}
                    </ul>
                    <Link
                        to="/"
                        className="link-secondary text-decoration-none"
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
