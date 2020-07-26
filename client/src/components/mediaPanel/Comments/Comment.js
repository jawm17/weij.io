import React, { useEffect , useState} from 'react';
import UserService from "../../../services/UserService";

export default function Comment(props) {
    const [username, setUsername] = useState("unknown");

    useEffect(() => {
        UserService.getInfoByID(props.user).then(data => {
            setUsername(data.username);
        })
    }, []);


    return (
        <div>
            {username + "   " + props.comment}
        </div>
    );

}