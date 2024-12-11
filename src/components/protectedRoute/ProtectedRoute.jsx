import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";


const ProtectedRoute = ({isLogged , children}) => {
    const location = useLocation();
    return (

        isLogged ? children : <Navigate to="/login"  replace state={{ from: location, message: `You need to log in to access ${children.type.name} page.` }}/>

    );
};

ProtectedRoute.prototype = {
    isLogged: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired
}

export default ProtectedRoute;
