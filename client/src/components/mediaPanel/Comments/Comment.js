import React, { useEffect , useState} from 'react';
import UserService from "../../../services/UserService";
import "./CommentSectionStyle.css";

export default function Comment(props) {
    const [username, setUsername] = useState("unknown");

    useEffect(() => {
        UserService.getInfoByID(props.user).then(data => {
            setUsername(data.username);
        })
    }, []);


    return (
        <div className="comment">
            {username + "   " + props.comment}
        </div>
    );

}