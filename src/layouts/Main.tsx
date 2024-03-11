import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

const Main = (Component: any) => {
    return (props: any) => {
        const { isLoaded } = props;

        if (!isLoaded) {
            return <Loader />;
        }

        return (
            <>
                {props.nav != 'Home' && <Navbar {...props} />}
                <Component {...props} />
            </>
        );
    };
};

export default Main;
