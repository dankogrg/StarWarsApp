import { useLocation, useParams } from 'react-router-dom';

const WithRouter = (Component: any) => {
    return (props: any) => {
        const params = useParams();
        const location = useLocation();

        return <Component params={params} location={location} {...props} />;
    };
};

export default WithRouter;
