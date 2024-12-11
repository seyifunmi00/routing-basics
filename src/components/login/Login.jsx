import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import PropTypes from "prop-types";
const Login = ({isLogged, setIsLogged}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [message , setMessage] = useState('');
    const mess = location.state?.message || "";
    const handleLogin = () => {
        setIsLogged(true);
        setMessage("login Successful");
        const redirectPath = location.state?.from || "/profile";
        navigate(redirectPath, { replace: true });
    };

    const handleLogout = () => {
        setIsLogged(false);
        setMessage("logout Successful");

    };
    return (
        <div className="text-center bg-teal-700 text-white py-6 flex flex-col gap-6 ">
            {mess && message ? "" : <p>{mess}</p>}
            {message && <p>{message}</p>}
            <button
                className='px-4 py-2 bg-gray-700 flex items-center justify-center rounded-full shadow text-center' onClick={handleLogin}>Login
            </button>
            <button
                className='px-4 py-2 bg-red-400 flex items-center justify-center rounded-full shadow text-center'
                onClick={handleLogout}>logout
            </button>
        </div>
    );
};

Login.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    setIsLogged: PropTypes.func.isRequired,
};

export default Login;
