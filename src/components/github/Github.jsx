
import {useLoaderData} from "react-router-dom";

const Github = () => {

    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     async function fetchData () {
    //         const response = await fetch("https://api.github.com/users/seyifunmi00");
    //         const data = await response.json();
    //         setData(data);
    //     }
    //
    //     fetchData()
    // }, []);

    const data = useLoaderData();
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} width={300} />
        </div>
    );
};

export default Github;


export const githubInfoLoader = async  () => {
    const response = await fetch("https://api.github.com/users/seyifunmi00");
           return response.json()
}

//The data can be gotten with the use loader hook
