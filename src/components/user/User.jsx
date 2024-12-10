import {Outlet, useNavigate} from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        const number = Math.floor(Math.random()*100)
        navigate(`/user/${number}`)
    }
    return (
        <div className='bg-orange-500 text-black text-3xl text-center py-5'>
           <h1>User</h1>
            <button onClick={handleClick} className='px-4 py-2 bg-white rounded-full shadow '>Click me</button>
            <Outlet />
        </div>
    );
};

export default User;
