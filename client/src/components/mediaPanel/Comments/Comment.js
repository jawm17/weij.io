import React, { useEffect , useState} from 'react';

export default function Comment(props) {
    const [username, setUsername] = useState("unknown");

    useEffect(() => {
        setUsername(props.user);
    }, []);


    return (
        <div>
            {username + "   " + props.comment}
        </div>
    );

}