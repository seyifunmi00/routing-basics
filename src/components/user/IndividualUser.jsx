
import {useParams} from "react-router-dom";

const IndividualUser = () => {

    const {id} = useParams()


    return (
        <div>
            {id}
        </div>
    );
};

export default IndividualUser;
